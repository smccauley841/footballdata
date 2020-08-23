import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-key': environment.apiToken,
    'x-rapidapi-host' : environment.apiHost 
  })
}
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getCountries(): Observable<any[]> {
  return this.http.get<any[]>(this.baseUrl + 'countries', httpOptions)
}

}
