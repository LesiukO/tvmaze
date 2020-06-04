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

  getSchedule(): Observable<any> {
    return this.http.get(`${this.baseUrl}/schedule?country=US&date=2014-12-01`);
    // return this.http.get(`${this.baseUrl}/schedule?country=US&date=${this.currentDate}`);
  }
}
