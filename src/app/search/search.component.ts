import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TvmazeApiService } from '../tvmaze-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private tvmazeApiService: TvmazeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchValue: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ])
    });
  }

  searchShows(searchValue) {
    this.tvmazeApiService.searchShows(searchValue).subscribe( (data) => {
      console.log(data);

    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value.searchValue);
    this.searchShows(this.form.value.searchValue);

    this.router.navigate(['/search'], {

      queryParams: {
        q: this.form.value.searchValue
      }
    });
    this.form.reset();
  }



}
