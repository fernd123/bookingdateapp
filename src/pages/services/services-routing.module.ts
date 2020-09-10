import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesPage } from './services';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ServicesPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }
