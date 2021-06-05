import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEye = faEyeSlash;
  loginform: FormGroup;
  submitted = false;

  get f() {
    return this.loginform.controls;
  }

  constructor() {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      numberoremail: new FormControl('', [
        Validators.required,
        validNumberOrEmail,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginsubmit() {
    this.submitted = true;
    console.log(this.loginform.value);
  }
}

function validNumberOrEmail(c: FormControl) {
  let EMAIL_REGEXP =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return EMAIL_REGEXP.test(c.value) || !isNaN(c.value)
    ? null
    : {
      validNumberOrEmail: {
          valid: false,
        },
      };
}
