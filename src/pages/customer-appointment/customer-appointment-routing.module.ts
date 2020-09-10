import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAppointmentPage } from './customer-appointment';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: CustomerAppointmentPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAppointmentRoutingModule { }
