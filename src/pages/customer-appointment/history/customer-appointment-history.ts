import { Component } from '@angular/core';
import { ServicePProvider } from './../../../providers/service-p/service-p';
import { LoadingController, ModalController } from '@ionic/angular';
import { AppointmentPProvider } from './../../../providers/appointment-p/appointment-p';
import { UserProvider } from './../../../providers/user-p/user-p';
import { environment } from 'src/environments/environment';
import { ParentComponent } from 'src/shared/component/parent.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-customer-appointment-history',
  templateUrl: 'customer-appointment-history.html',
})
export class CustomerAppointmentHistoryPage extends ParentComponent {

  title: string = environment.customerAppointmentHistoryTitle;
  appointmentByCustomer: any = [];

  constructor(
    public loadingCtrl: LoadingController,
    private userProvider: UserProvider,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public serviceProvider: ServicePProvider,
    public appointmentPProvider: AppointmentPProvider
  ) {
    super(loadingCtrl, formBuilder, modalController);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAppointmentHistoryPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CustomerAppointmentHistoryPage');
    let self = this;
    this.showLoading(environment.loading);
    this.appointmentPProvider.getAppointmentByCustomerId(this.userProvider.userLoged).subscribe(function (appointments) {
      self.appointmentByCustomer = appointments;
      for (let i = 0; i < self.appointmentByCustomer.length; i++) {
        debugger;
        //TODO: Get service name by id
      }
      setTimeout(function () {
        self.loading.dismiss();
      }, 500);

    });
  }
}
