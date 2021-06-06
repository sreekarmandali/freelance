import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule,CommonModule,MatCardModule,MatFormFieldModule, FontAwesomeModule, ReactiveFormsModule],
  providers: [],
  exports:[LoginComponent,LoginRoutingModule]
})
export class LoginModule {}
