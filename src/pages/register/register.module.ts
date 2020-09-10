import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterModule { }
