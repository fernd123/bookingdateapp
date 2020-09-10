import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EmployeePage } from './employee';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeePage]
})
export class EmployeeModule { }
