import { NavController, NavParams, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { CompanyPProvider } from './../../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/models/company-model';
import { ParentComponent } from 'src/shared/component/parent.component';

@Component({
  selector: 'page-managecompany',
  templateUrl: 'manage-company.html',
})

export class ManageCompanyPage extends ParentComponent {

  title: string = environment.companyDataTitle;
  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public companyPProvider: CompanyPProvider,
    public alertCtrl: AlertController,
    public modalController: ModalController
  ) {
    super(loadingCtrl, formBuilder, modalController);
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.name : '', Validators.required],
      phone: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.phone : '', Validators.required],
      info: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.info : '', Validators.required],
      initialHourMorning: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialHourMorning : '', Validators.required],
      initialMinuteMorning: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialMinuteMorning : 'Hombre', Validators.required],
      finalHourMorning: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalHourMorning : '', Validators.required],
      finalMinuteMorning: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalMinuteMorning : '', Validators.required],
      initialHourAfternoon: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialHourAfternoon : '', Validators.required],
      initialMinuteAfternoon: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialMinuteAfternoon : '', Validators.required],
      finalHourAfternoon: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalHourAfternoon : '', Validators.required],
      finalMinuteAfternoon: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalMinuteAfternoon : '', Validators.required],
      initialHourWeekend: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialHourWeekend : '', null],
      initialMinuteWeekend: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.initialMinuteWeekend : '', null],
      finalHourWeekend: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalHourWeekend : '', null],
      finalMinuteWeekend: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.finalMinuteWeekend : '', null],
      //noWorkingDays: this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.noWorkingDays : [],
      isActive: [this.companyPProvider.companySelected != undefined ? this.companyPProvider.companySelected.isActive : true, Validators.required]
    });
  }

  ionViewDidLoad() {
    let companySelected = this.companyPProvider.companySelected;
    if (companySelected != undefined && companySelected != null && companySelected.id != undefined) {
      this.title = environment.editCompanyTitle + ` ${companySelected.name}`;
    } else {
      this.title = environment.newCompanyTitle;
    }
  }

  public onSubmit() {
    let self = this;
    this.companyPProvider.companySelected = this.createFromForm();
    this.companyPProvider.saveCompany().subscribe(async function (company) {
      let alert = self.alertCtrl.create({
        header: environment.successCompanyCreated,
        buttons: [environment.ok]
      });
      (await alert).present();
      self.close();
    });
  }

  close() {
    let self = this;
    this.companyPProvider.getCompanies().subscribe(function (companies) {
      self.companyPProvider.companyList = companies;
      self.modalController.dismiss();
      setTimeout(function () {
        self.companyPProvider.companySelected = undefined;
      }, 500);
    });
  }

  protected createFromForm(): Company {
    let company: Company = new Company();
    let formValue: any = this.form.value;

    company.name = formValue.name;
    company.phone = formValue.phone;
    company.info = formValue.info;
    company.initialHourMorning = formValue.initialHourMorning;
    company.initialMinuteMorning = formValue.initialMinuteMorning;
    company.finalHourMorning = formValue.finalHourMorning;
    company.finalMinuteMorning = formValue.finalMinuteMorning;
    company.initialHourAfternoon = formValue.initialHourAfternoon;
    company.initialMinuteAfternoon = formValue.initialMinuteAfternoon;
    company.finalHourAfternoon = formValue.finalHourAfternoon;
    company.finalMinuteAfternoon = formValue.finalMinuteAfternoon;
    company.initialHourWeekend = formValue.initialHourWeekend;
    company.initialMinuteWeekend = formValue.initialMinuteWeekend;
    company.finalHourWeekend = formValue.finalHourWeekend;
    company.finalMinuteWeekend = formValue.finalMinuteWeekend;
    //company.noWorkingDays = formValue.noWorkingDays;
    company.isActive = formValue.isActive;
    company.id = this.companyPProvider.companySelected.id;
    return company;
  }

}
