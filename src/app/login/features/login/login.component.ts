import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEye = faEyeSlash;
  loginform: FormGroup
  submitted = false
   
  get f(){
      return this.loginform.controls;
  }

  constructor() {}

  ngOnInit(): void {
    this.loginform  = new FormGroup({
      nameoremail: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
    });
    // this.loginform.controls['nameoremail'].valueChanges.subscribe(value => {
    //   this.submitted = false
    // });
    // this.loginform.controls['password'].valueChanges.subscribe(value => {
    //   this.submitted = false
    // });
  }
  loginsubmit(){
    this.submitted = true
    console.log(this.loginform.value);
  }
  
}
