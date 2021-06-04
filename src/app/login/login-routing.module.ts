import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}