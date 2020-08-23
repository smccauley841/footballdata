import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { CompetitionService } from 'src/app/_services/competition.service';
import { Comp } from 'src/app/_models/Competiton/comp';
import { ActivatedRoute } from '@angular/router';
import { Teams } from 'src/app/_models/Teams/teams';
import { TeamsService } from 'src/app/_services/teams.service';
import { Standings } from 'src/app/_models/Standings/standings';

@Component({
  selector: 'app-CompetitionDetails',
  templateUrl: './CompetitionDetails.component.html',
  styleUrls: ['./CompetitionDetails.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  comp: Teams = {count: 0,
    filters:{},
    competition:{
      id: 0,
      area: {
        id:0,
        name: ''
      },
    name:'',
    plan:'',
    currentSeason: {
        id: 0,
        startDate: '',
        endDate: '',
      },
    numberOfAvailableSeasons: 0,
    lastUpdated: new Date(Date.now())
    },
    season: {
      id:0,
      startDate: '',
      endDate: '',
      winner:{
        id: 0,
        name: '',
        shortName: '',
        tla: '',
        crestUrl: ''
      }
    },
    teams: []  };
  
  constructor(private compService: CompetitionService, private route: ActivatedRoute, 
    private teamService: TeamsService) { }

  ngOnInit() {
    this.loadCompetition();
  }

  loadCompetition() {
    this.teamService.getCompTeams(+this.route.snapshot.params.id).subscribe((team: Teams) => {
      this.comp = team;
    })

}

}