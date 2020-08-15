import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { CompetitionService } from 'src/app/_services/competition.service';
import { Comp } from 'src/app/_models/Competiton/comp';
import { ActivatedRoute } from '@angular/router';
import { Teams } from 'src/app/_models/Teams/teams';
import { TeamsService } from 'src/app/_services/teams.service';

@Component({
  selector: 'app-CompetitionDetails',
  templateUrl: './CompetitionDetails.component.html',
  styleUrls: ['./CompetitionDetails.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  comp: Teams;
  teams: Teams;
  constructor(private compService: CompetitionService, private route: ActivatedRoute, 
    private teamService: TeamsService) { }

  ngOnInit() {
    this.loadCompetition();
  }

  loadCompetition() {
   // this.compService.getCompetition(+this.route.snapshot.params.id).subscribe((comp: Comp) => {
   // this.comp = comp;
   // });
    this.teamService.getCompTeams(+this.route.snapshot.params.id).subscribe((team: Teams) => {
      this.comp = team;
      console.log(this.teams);
    })

}

}