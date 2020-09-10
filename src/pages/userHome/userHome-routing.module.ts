import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomePage } from './userHome';
import { AuthGuard } from 'src/core/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: UserHomePage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHomeRoutingModule { }
