import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/shared/shared.module';
import { CustomerAppointmentHistoricalRoutingModule } from './customer-appointment-historical-routing.module';
import { CustomerAppointmentHistoryPage } from './customer-appointment-history';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CustomerAppointmentHistoricalRoutingModule
  ],
  declarations: [CustomerAppointmentHistoryPage]
})
export class CustomerAppointmentHistoricalModule { }
