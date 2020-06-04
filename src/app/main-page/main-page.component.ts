import { Component, OnInit } from '@angular/core';
import { TvmazeApiService } from '../tvmaze-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shows$ = [];

  constructor(
    private tvmazeApiService: TvmazeApiService,
  ) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.tvmazeApiService.getShows()
      .subscribe( (shows) => {
        this.shows$ = shows.sort( (showA, showB) => {
          return showB.rating.average - showA.rating.average;
        });
      });
  }

  getCurrentSchedule() {
    // this.getCurrentScheduleService
  }

}
