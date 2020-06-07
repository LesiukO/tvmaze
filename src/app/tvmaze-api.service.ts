import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TvmazeApiService {

  baseUrl = 'https://api.tvmaze.com';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getShowByTvrage(tvrage): Observable<any> {
      return this.http.get(`${this.baseUrl}/lookup/shows?tvrage=${tvrage}/`);
  }

  getShows(): Observable<any> {
    return this.http.get(`${this.baseUrl}/show`);
  }

  getCurrentSchedule(currentDate): Observable<any> {
    return this.http.get(`${this.baseUrl}/schedule?country=US&date=${currentDate}`);
  }

  searchShows(searchValue): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/shows?q=${searchValue}`);
  }

}
