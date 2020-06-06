import { Component, OnInit } from '@angular/core';
import { TvmazeApiService } from '../tvmaze-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shows$ = [];
  lastViewed = [];
  schedule$ = [];

  currentDate;
  isoDate;

  quantity = 5;

  constructor(
    private tvmazeApiService: TvmazeApiService,
  ) { }

  ngOnInit(): void {
    this.getShows();
    this.getCurrentDate();
    this.getCurrentSchedule();
    this.getLastViewed();
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
    this.tvmazeApiService.getCurrentSchedule(this.isoDate.slice(0, 10)).subscribe( (data) => {
      this.schedule$ = data;
      console.log(this.schedule$);
    });
  }

  getCurrentDate() {
    this.isoDate = new Date().toISOString();
    this.currentDate = new Date();
    console.log(this.currentDate);
  }

  getLastViewed() {
    if (localStorage.getItem('lastViewed') === null) {
      this.lastViewed = [];
    } else {
      this.lastViewed = JSON.parse(localStorage.getItem('lastViewed'))
    }
  }

  showMore() {
    if (this.quantity === 5) {
      this.quantity = 15;
    } else {
      this.quantity = 5;
    }
  }

}
