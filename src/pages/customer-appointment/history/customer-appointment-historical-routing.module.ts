import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAppointmentHistoryPage } from './customer-appointment-history';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: CustomerAppointmentHistoryPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAppointmentHistoricalRoutingModule { }
