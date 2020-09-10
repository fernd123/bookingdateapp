import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { ServicePProvider } from '../../providers/service-p/service-p';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Service } from '../../models/service-model.';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from 'src/environments/environment';
import { Appointment } from './../../models/appointment-model';
import { DateUtils } from '../../utils/date-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParentComponent } from 'src/shared/component/parent.component';


@Component({
  selector: 'page-customer-appointment',
  templateUrl: 'customer-appointment.html',
})
export class CustomerAppointmentPage extends ParentComponent {

  avaiableAppointmentList: Appointment[] = [];
  serviceList: Service[] = [];
  serviceModel: Service = undefined;
  dateModel: Date = undefined;
  loading: any;
  title: string = environment.bookAppointmentLbl;
  genre: string = undefined;
  showResult: boolean = false;
  loadingContent: boolean = false;

  constructor(
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public userProvider: UserProvider,
    public serviceProvider: ServicePProvider,
    public appointmentPProvider: AppointmentPProvider,
    public modalController: ModalController,
    public formBuilder: FormBuilder
  ) {
    super(loadingCtrl, formBuilder, modalController);
  }

  ngOnInit() {
    this.form = this.buildFormGroup();
    this.getServicesByGenre(this.form.value.genre);
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      genre: [this.userProvider.userLoged != undefined ? this.userProvider.userLoged.genre : 'Hombre', Validators.required],
      service: [undefined, Validators.required],
      dateModel: [undefined, Validators.required]
    });
  }

  getServicesByGenre(genre: string) {
    let self = this;
    this.serviceProvider.getServicesByGenre(genre).subscribe(function (services) {
      self.serviceList = services;
    });
  }

  searchAvaiableAppointments() {
    this.loadingContent = true;
    this.showResult = true;
    let self = this;
    this.showLoading(environment.loading);
    this.appointmentPProvider.searchAvaiableAppointment(this.form.value.dateModel).subscribe(function (appointments) {
      if (self.loading != undefined)
        self.loading.dismiss();
      self.avaiableAppointmentList = appointments;
    });
  }

  async bookAppointment(appointment: Appointment, appointmentCard: any): Promise<void> {
    if (appointment.customerId == undefined || appointment.customerId == null) {
      appointmentCard.el.style.backgroundColor = environment.orange;
      let dateFormated = DateUtils.getDateName(appointment.date);

      let alert = this.alertCtrl.create({
        header: environment.titleBookAppointment,
        message: `<br><b>${dateFormated}<br>Hora: ${appointment.initialHour}:${appointment.initialMinute == 0 ?
          '00' : appointment.initialMinute}-${appointment.finalHour}:${appointment.finalMinute == 0 ?
            '00' : appointment.finalMinute}</b>`,
        buttons: [
          {
            text: environment.cancel,
            handler: () => {
              appointmentCard.style.backgroundColor = "";
              console.log('Cancel clicked');
            }
          },
          {
            text: environment.confirm,
            handler: () => {
              appointmentCard.el.style.backgroundColor = "";
              appointment.serviceId = this.form.value.service.id;
              appointment.customerId = this.userProvider.userLoged.id;
              this.appointmentPProvider.updateAppointment(appointment).subscribe(function (result) {
                console.log(result);
              });
            }
          }
        ]
      });
      (await alert).present();
    }
  }


  back(): void {
    this.showResult = false;
  }

}
