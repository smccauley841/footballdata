import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Competition } from '../_models/Competitions/competition';
import { Comp } from '../_models/Competiton/comp';
import { Competitions } from '../_models/Competitions/competitions';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token': environment.apiToken
  })
}
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  baseUrl = environment.apiUrl;
  apiToken = environment.apiToken;
  //headers = new HttpHeaders()
  //          .set("X-Auth-Token", this.apiToken);

constructor(private http: HttpClient) { 

}

getCompetitions(): Observable<Competitions> {
  return this.http.get<Competitions>(this.baseUrl + 'v2/competitions', httpOptions)
}

getCompetition(id): Observable<Comp> {
  return this.http.get<Comp>(this.baseUrl + 'v2/competitions/' + id, httpOptions)
}
}

//.map(spots => {
 // return spots.filter(spot => { 
 //   return spot.lat > minlat && spot.lat < maxlat;
//})
//})

