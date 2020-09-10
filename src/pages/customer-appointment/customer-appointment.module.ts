import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomerAppointmentPage } from './customer-appointment';
import { CustomerAppointmentRoutingModule } from './customer-appointment-routing.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CustomerAppointmentRoutingModule
  ],
  declarations: [CustomerAppointmentPage]
})
export class CustomerAppointmentModule { }
