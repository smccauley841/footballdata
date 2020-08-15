import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '../_models/Teams/teams';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token': environment.apiToken
  })
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  baseUrl = environment.apiUrl;
  apiToken = environment.apiToken;

constructor(private http: HttpClient) { }

getCompTeams(compId): Observable<Teams> {
  return this.http.get<Teams>(this.baseUrl + 'v2/competitions/' + compId + '/teams', httpOptions)
}

}
