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

  constructor(
    private tvmazeApiService: TvmazeApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tvmazeApiService.getShowByTvrage(params.tvrage).subscribe( (show) => {
        this.show = show;
        console.log(this.show);

      });
    });
  }

  getShow(tvrage) {
    this.tvmazeApiService.getShowByTvrage(tvrage).subscribe( (show) => {
      this.show = show;
      console.log(this.show);
    });
  }

}
