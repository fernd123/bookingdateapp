import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserHomeRoutingModule } from './userHome-routing.module';
import { UserHomePage } from './userHome';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserHomeRoutingModule
  ],
  declarations: [UserHomePage]
})
export class UserHomeModule { }
