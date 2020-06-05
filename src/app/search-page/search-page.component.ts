import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvmazeApiService } from '../tvmaze-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  shows = [];

  constructor(
    private route: ActivatedRoute,
    private tvmazeApiService: TvmazeApiService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.tvmazeApiService.searchShows(params.q).subscribe( (data) => {
        this.shows = data;
        console.log(this.shows);

      });
    });
  }



}
