import { Component, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ManageServicesPage } from './manage-services/manage-services';
import { ServicePProvider } from '../../providers/service-p/service-p';

import { Service } from './../../models/service-model.';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ParentComponent } from 'src/shared/component/parent.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage extends ParentComponent {

  title: string = environment.servicesLbl;
  searchInput: String;
  @ViewChild('searchInputSearchB') searchInputSearchB: any;

  constructor(
    public serviceProvider: ServicePProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public router: Router
  ) {
    super(loadingCtrl, formBuilder, modalController);
    this.showLoading(environment.loading);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ServicesPage');
    let self = this;
    this.serviceProvider.getServices().subscribe(function (services) {
      self.serviceProvider.serviceList = services;
      self.loading.dismiss();
    });
  }

  public onInput($event) {
    console.log('Input: ' + this.searchInput);
    this.serviceProvider.getServicesByValue(this.searchInputSearchB.value);
  }

  public onCancel($event) {
    console.log('Input: ' + this.searchInput);
    let self = this;
    this.serviceProvider.getServices().subscribe(function (service) {
      self.serviceProvider.serviceList = service;
    });
  }

  public addService() {
    this.presentModal('currentService', new Service(), ManageServicesPage);
  }

  public editService(service: Service) {
    this.serviceProvider.serviceSelected = service;
    this.presentModal('currentService', service, ManageServicesPage);
  }

}
