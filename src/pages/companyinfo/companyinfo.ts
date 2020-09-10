import { ManageCompanyPage } from './manage-company/manage-company';
import { Company } from './../../models/company-model';
import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ParentComponent } from 'src/shared/component/parent.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-companyinfo',
  templateUrl: 'companyinfo.html',
})
export class CompanyinfoPage extends ParentComponent {

  title: string = environment.companyDataTitle;

  constructor(
    public router: Router,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public companyPProvider: CompanyPProvider
  ) {
    super(loadingCtrl, formBuilder, modalController);
    this.showLoading(environment.loading);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CompanyinfoPage');
    let self = this;
    this.companyPProvider.getCompanies().subscribe(function (company) {
      self.companyPProvider.companyList = company;
      self.loading.dismiss();
    });
  }

  public addCompany() {
    this.companyPProvider.companySelected = new Company();
    this.presentModal('currentCompany', new Company(), ManageCompanyPage);
  }

  public editCompany(company: Company) {
    this.companyPProvider.companySelected = company;
    this.presentModal('currentCompany', company, ManageCompanyPage);
  }

}
