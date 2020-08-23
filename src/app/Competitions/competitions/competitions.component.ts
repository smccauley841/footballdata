import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { CompetitionService } from 'src/app/_services/competition.service';
import { Competitions } from 'src/app/_models/Competitions/competitions';
import { ActivatedRoute } from '@angular/router';
import { Leagues, League } from 'src/app/_models/Competitions/leagues';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: League[];
  country: string = '';

  constructor(private compService: CompetitionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.compService.getCompetitions(this.route.snapshot.url[1].path).subscribe((competitions: Leagues) => {
    this.competitions = competitions.api.leagues;
    this.country = competitions.api.leagues[0].country;
    this.competitions = this.competitions.sort(function(a, b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    });
  }

  // this goes in the component
  compsFiltered(comps, filter) {
  comps = comps.filter(v => v.is_current == 1)
  comps = comps.filter(v => v.type == filter)
  return comps;
}

}
