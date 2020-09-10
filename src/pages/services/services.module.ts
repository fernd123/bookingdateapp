import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ServicesPage } from './services';
import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ServicesRoutingModule
  ],
  declarations: [ServicesPage]
})
export class ServicesModule { }
