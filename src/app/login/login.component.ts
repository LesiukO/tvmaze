import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ])
      }
    );
  }

}
