import { Component, OnInit } from '@angular/core';
import { GetSingleShowService } from '../get-single-show.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  show;

  constructor(
    private getSingleShowService: GetSingleShowService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getSingleShowService.getShowByTvrage(params.tvrage).subscribe( (show) => {
        this.show = show;
        console.log(this.show);

      });
    });
  }

  getShow(tvrage) {
    this.getSingleShowService.getShowByTvrage(tvrage).subscribe( (show) => {
      this.show = show;
      console.log(this.show);
    });
  }

}
