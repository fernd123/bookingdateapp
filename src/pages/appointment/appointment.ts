import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Company } from './../../models/company-model';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentComponent } from 'src/shared/component/parent.component';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage extends ParentComponent {

  public title = environment.appointmentLbl;
  public searchInput: String;

  public company: Company = new Company();
  public initialDateModel: Date = new Date();
  public finalDateModel: Date = new Date();
  public excludeNoWorkingDays: boolean = true;

  public hideOptions: boolean = false;
  public showGenerateMeetingContent: Boolean = false;
  public showAllMeetingsContent: boolean;

  public companyList: any = [];

  constructor(
    public appointmentPProvider: AppointmentPProvider,
    public companyProvider: CompanyPProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public alertCtrl: AlertController
  ) {
    super(loadingCtrl, formBuilder, modalController);

    let self = this;
    this.companyProvider.getCompanies().subscribe(function (company) {
      self.companyList = company;
    });
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      initialDateModel: [undefined, Validators.required],
      finalDateModel: [undefined, Validators.required],
      company: ['', Validators.required],
      excludeNoWorkingDays: [false]
    });
  }

  showGenerateMeeting(): void {
    this.showGenerateMeetingContent = !this.showGenerateMeetingContent;
    this.hideOptions = true;
    if (this.showGenerateMeetingContent == false) {
      this.initialDateModel = undefined;
      this.finalDateModel = undefined;
      this.hideOptions = false;
    }
  }

  showAllMeetings(): void {
    let self = this;
    self.showAllMeetingsContent = !this.showAllMeetingsContent;
    self.hideOptions = true;
    if (self.showAllMeetingsContent == false) {
      self.hideOptions = false;
    } else {
      this.showLoading(environment.loading);
      this.appointmentPProvider.getLastAppointments(null).subscribe(function (appointments) {
        self.appointmentPProvider.appointmentList = appointments;
        self.loading.dismiss();
      });
    }
  }

  generateAppointment(): void {
    let self = this;
    //this.loading = this.showLoading();
    let generateAppointment = this.createFromForm();
    this.showGeneratingAppointments();
    this.appointmentPProvider.generateAppointment(generateAppointment.company, generateAppointment.initialDateModel, generateAppointment.finalDateModel, generateAppointment.excludeNoWorkingDays).subscribe(async function (res) {
      self.loading.dismiss();
      let alert = self.alertCtrl.create({
        header: environment.successAppointmentGenerated,
        buttons: [environment.ok]
      });
      (await alert).present();
      self.showGenerateMeeting();
    });
  }

  searchMeeting(): void {
    alert('no está hecho aun');
  }

  async showGeneratingAppointments() {
    this.loading = await this.loadingCtrl.create({
      message: environment.generatingAppointments
    });
    this.loading.present();
  }

  protected createFromForm(): any {
    let generateAppointment: any = {};
    let formValue: any = this.form.value;

    generateAppointment.initialDateModel = formValue.initialDateModel;
    generateAppointment.finalDateModel = formValue.finalDateModel;
    generateAppointment.company = formValue.company;
    generateAppointment.excludeNoWorkingDays = formValue.excludeNoWorkingDays;
    return generateAppointment;
  }
}
