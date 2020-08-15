import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Competition } from 'src/app/_models/Competitions/competition';
import { CompetitionService } from 'src/app/_services/competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[] = [];
  comps: Competition[] = [];

  constructor(private compService: CompetitionService) { }

  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.compService.getCompetitions().subscribe((competitions: Competition[]) => {
    this.competitions = competitions;
    
    });    
  }

  // this goes in the component
filteredAreaList(comps) {
  return comps.filter(v => v.plan === 'TIER_ONE')
}

}
