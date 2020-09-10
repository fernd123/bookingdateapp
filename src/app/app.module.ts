import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EmployeePage } from '../pages/employee/employee';
import { ServicesPage } from '../pages/services/services';
import { ManageEmployeePage } from '../pages/employee/manage-employee/manage-employee';
import { CompanyinfoPage } from '../pages/companyinfo/companyinfo';
import { ManageCompanyPage } from './../pages/companyinfo/manage-company/manage-company';
import { ManageServicesPage } from './../pages/services/manage-services/manage-services';
import { AppointmentPage } from './../pages/appointment/appointment';
import { CustomerAppointmentPage } from './../pages/customer-appointment/customer-appointment';

// Providers
import { LoginProvider } from '../providers/login/login';
import { UserProvider } from './../providers/user-p/user-p';
import { CompanyPProvider } from '../providers/company-p/company-p';
import { ServicePProvider } from '../providers/service-p/service-p';
import { AppointmentPProvider } from './../providers/appointment-p/appointment-p';
import { CustomerAppointmentHistoryPage } from 'src/pages/customer-appointment/history/customer-appointment-history';
import { DateStringPipe } from 'src/pipes/date-string.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { AuthGuard } from 'src/core/auth.guard';



@NgModule({
  declarations: [AppComponent,
    DateStringPipe,
    //HomePage,
    //LoginPage,
    //RegisterPage,
    ManageCompanyPage,
    //ServicesPage,
    ManageEmployeePage,
    ManageServicesPage,
    //CustomerAppointmentPage,
    CustomerAppointmentHistoryPage
  ],

  entryComponents: [
    AppComponent,
    //HomePage,
    //LoginPage,
    //RegisterPage,
    //ManageCompanyPage,
    //ServicesPage,
    ManageEmployeePage,
    ManageServicesPage,
    //CustomerAppointmentPage,
    CustomerAppointmentHistoryPage
  ],

  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule,
    HttpClientModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginProvider,
    UserProvider,
    ServicePProvider,
    CompanyPProvider,
    AppointmentPProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
