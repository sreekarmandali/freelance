import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor'
import { ApiService } from './services/api.sevice'

@NgModule({
  declarations: [AppComponent, ApiService],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
