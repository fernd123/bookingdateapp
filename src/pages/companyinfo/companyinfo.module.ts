import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { CompanyinfoRoutingModule } from './companyinfo-routing.module';
import { CompanyinfoPage } from './companyinfo';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CompanyinfoRoutingModule
  ],
  declarations: [CompanyinfoPage]
})
export class CompanyinfoModule { }
