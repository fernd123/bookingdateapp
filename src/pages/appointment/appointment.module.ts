import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/shared/shared.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentPage } from './appointment';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AppointmentRoutingModule
  ],
  declarations: [AppointmentPage]
})
export class AppointmentModule { }
