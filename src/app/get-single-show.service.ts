import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSingleShowService {

  baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShowByTvrage(tvrage): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup/shows?tvrage=${tvrage}`);
  }
}
