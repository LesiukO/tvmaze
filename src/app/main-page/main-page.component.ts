import { Component, OnInit } from '@angular/core';
import { GetShowsService } from '../get-shows.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  shows$ = [];

  constructor(
    private getShowsService: GetShowsService
  ) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.getShowsService.getShows()
      .subscribe( (shows) => {
        this.shows$ = shows.sort( (showA, showB) => {
          return showB.rating.average - showA.rating.average;
        });
        console.log(this.shows$);
      });
  }

}
