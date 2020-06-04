import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeApiService {

  baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShowByTvrage(tvrage): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup/shows?tvrage=${tvrage}/`);
  }

  getShows(): Observable<any> {
    return this.http.get(`${this.baseUrl}/show`);
  }

  getCurrentSchedule(currentDate): Observable<any> {
    // return this.http.get(`${this.baseUrl}/schedule?country=US&date=2020-06-04`);
    // return this.http.get(`${this.baseUrl}/schedule?country=US&date=2020-06-04T11:47:43.043Z`);
    return this.http.get(`${this.baseUrl}/schedule?country=US&date=${currentDate}`);
  }
}
