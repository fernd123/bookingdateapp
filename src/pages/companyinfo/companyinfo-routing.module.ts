import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyinfoPage } from './companyinfo';
import { AuthGuard } from 'src/core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CompanyinfoPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyinfoRoutingModule { }
