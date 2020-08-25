import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leagues } from '../_models/Competitions/leagues';
import { Standings } from '../_models/Standings/standings';
import { Fixtures } from '../_models/Fixtures/Fixtures';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-key': environment.apiToken,
    'x-rapidapi-host' : environment.apiHost 
  })
}
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { 

}
getCompetitions(nation): Observable<Leagues> {
  return this.http.get<Leagues>(this.baseUrl + 'leagues/country/' + nation, httpOptions)
}

getCompetitionDetails(id): Observable<Leagues> {
  return this.http.get<Leagues>(this.baseUrl + 'leagues/league/' + id, httpOptions)
}

getCompStandings(id): Observable<Standings> {
  return this.http.get<Standings>(this.baseUrl + 'leagueTable/' + id, httpOptions)
}

getNextFixtures(id): Observable<Fixtures> {
  return this.http.get<Fixtures>(this.baseUrl + 'fixtures/league/' + id + '/next/10', httpOptions)
}

}



