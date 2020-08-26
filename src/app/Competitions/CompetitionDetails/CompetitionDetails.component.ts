import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CompetitionService } from 'src/app/_services/competition.service';
import { Comp } from 'src/app/_models/Competiton/comp';
import { ActivatedRoute } from '@angular/router';
import { Teams } from 'src/app/_models/Teams/teams';
import { TeamsService } from 'src/app/_services/teams.service';
import { Standings } from 'src/app/_models/Standings/standings';
import { Competition } from 'src/app/_models/Competitions/competition';
import { League } from 'src/app/_models/Competitions/leagues';
import { Fixtures, Fixture } from 'src/app/_models/Fixtures/Fixtures';

@Component({
  selector: 'app-CompetitionDetails',
  templateUrl: './CompetitionDetails.component.html',
  styleUrls: ['./CompetitionDetails.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  standings: any[][];
  competition: League;
  fixtures: Fixture[];
  pFixtureId: Fixture;

  constructor(private compService: CompetitionService, private route: ActivatedRoute,
    private teamService: TeamsService) { }

  ngOnInit() {
    this.loadCompetition();
    this.loadStandings();
    this.loadNextTenFixtures();
  }

  loadCompetition() {
    this.compService.getCompetitionDetails(+this.route.snapshot.url[2].path).subscribe((comp: Competition) => {
      this.competition = comp.api.leagues[0];
    })
  }

  loadStandings() {
    this.compService.getCompStandings(+this.route.snapshot.url[2].path).subscribe((standings: Standings) => {
      this.standings = standings.api.standings;
    })
  }

  loadNextTenFixtures() {
    this.compService.getNextFixtures(+this.route.snapshot.url[2].path).subscribe((fixtures: Fixtures) => {
      this.fixtures = fixtures.api.fixtures;
    })
  }

  updateChild(id) {
    this.pFixtureId = id;
  }

}