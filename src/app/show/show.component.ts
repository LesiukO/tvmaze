import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvmazeApiService } from '../tvmaze-api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  show;
  lastViewed;

  constructor(
    private tvmazeApiService: TvmazeApiService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tvmazeApiService.getShowByImdb(params.imdb).subscribe( (show) => {
        this.show = show;

        // save to local storage
        this.saveShowToLastViewed(show);
      });
    });

    this.getLastViewed();
  }

  getLastViewed() {
    if (localStorage.getItem('lastViewed') === null) {
      this.lastViewed = [];
    } else {
      this.lastViewed = JSON.parse(localStorage.getItem('lastViewed'));
    }
  }

  saveShowToLastViewed(show) {
    this.lastViewed.forEach( (currentShow, index) => {
      if (currentShow.id === show.id) {
        this.lastViewed.splice(index, 1)
      }
    });
    this.lastViewed.unshift(show);
    localStorage.setItem('lastViewed', JSON.stringify(this.lastViewed))
  }

}
