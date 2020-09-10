import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentPage } from './appointment';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppointmentPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule { }
