import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Competition } from 'src/app/_models/Competitions/competition';
import { CompetitionService } from 'src/app/_services/competition.service';
import { Competitions } from 'src/app/_models/Competitions/competitions';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competitions = {
    count: 0,
    filters: [],
    competitions: []
  };
  comps: Competition[] = [];

  constructor(private compService: CompetitionService) { }

  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.compService.getCompetitions().subscribe((competitions: Competitions) => {
    this.competitions = competitions;
    console.log(competitions);
    });    
  }

  // this goes in the component
filteredAreaList(comps) {
  return comps.filter(v => v.plan === 'TIER_ONE')
}

}
