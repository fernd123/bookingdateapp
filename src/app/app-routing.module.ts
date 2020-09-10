import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'userHome', loadChildren: () => import('../pages/userHome/userHome.module').then(m => m.UserHomeModule) },
  { path: 'employee', loadChildren: () => import('../pages/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'services', loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesModule) },
  { path: 'appointment', loadChildren: () => import('../pages/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: 'customer-appointment', loadChildren: () => import('../pages/customer-appointment/customer-appointment.module').then(m => m.CustomerAppointmentModule) },
  { path: 'customer-appointment-historical', loadChildren: () => import('../pages/customer-appointment/history/customer-appointment-historical-routing.module').then(m => m.CustomerAppointmentHistoricalRoutingModule) },
  { path: 'companyinfo', loadChildren: () => import('../pages/companyinfo/companyinfo.module').then(m => m.CompanyinfoModule) }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
