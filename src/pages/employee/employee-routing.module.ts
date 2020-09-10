import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePage } from './employee';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: EmployeePage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
