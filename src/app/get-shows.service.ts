import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetShowsService {

  baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShows(): Observable<any> {
    return this.http.get(`${this.baseUrl}/show`);
  }
}
