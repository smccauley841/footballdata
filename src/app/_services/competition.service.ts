import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Competition } from '../_models/Competitions/competition';
import { Comp } from '../_models/Competiton/comp';
import { Competitions } from '../_models/Competitions/competitions';
import { Standings } from '../_models/Standings/standings';
import { Leagues } from '../_models/Competitions/leagues';

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

getCompStandings(id): Observable<Leagues> {
  return this.http.get<Leagues>(this.baseUrl + 'leagues/country/' + id, httpOptions)
}
}



