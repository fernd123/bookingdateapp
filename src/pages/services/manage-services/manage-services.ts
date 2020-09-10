import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ServicePProvider } from './../../../providers/service-p/service-p';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/models/service-model.';
import { ParentComponent } from 'src/shared/component/parent.component';


@Component({
  selector: 'page-manageservices',
  templateUrl: 'manage-services.html',
})
export class ManageServicesPage extends ParentComponent {

  title: string = 'Servicio';
  action: string;
  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public serviceProvider: ServicePProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalController: ModalController) {
    super(loadingCtrl, formBuilder, modalController);
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [this.serviceProvider.serviceSelected != undefined ? this.serviceProvider.serviceSelected.name : '', Validators.required],
      description: [this.serviceProvider.serviceSelected != undefined ? this.serviceProvider.serviceSelected.description : '', Validators.required],
      duration: [this.serviceProvider.serviceSelected != undefined ? this.serviceProvider.serviceSelected.duration : '', Validators.required],
      price: [this.serviceProvider.serviceSelected != undefined ? this.serviceProvider.serviceSelected.price : '', Validators.required],
      genre: [this.serviceProvider.serviceSelected != undefined ? this.serviceProvider.serviceSelected.genre : 'Hombre', Validators.required]
    });
  }

  ionViewDidLoad() {

  }

  onSubmit() {
    let self = this;
    this.serviceProvider.serviceSelected = this.createFromForm();
    this.serviceProvider.saveService().subscribe(async function (service) {
      let alert = self.alertCtrl.create({
        header: environment.successServiceCreated,
        buttons: [environment.ok]
      });
      (await alert).present();
      self.close();
    });
  }

  async removeService() {
    let self = this;

    let alert = this.alertCtrl.create({
      header: environment.deleteLbl,
      message: environment.deleteConfirmation,
      buttons: [
        {
          text: environment.cancel,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: environment.confirm,
          handler: () => {
            this.serviceProvider.delete().subscribe(async function (service) {
              let alert = self.alertCtrl.create({
                header: environment.successServiceRemoved,
                buttons: [environment.ok]
              });
              (await alert).present();
              self.close();
            });
          }
        }
      ]
    });
    (await alert).present();
  }

  close() {
    let self = this;
    this.serviceProvider.getServices().subscribe(function (services) {
      self.serviceProvider.serviceList = services;
      self.modalController.dismiss();
      setTimeout(function () {
        self.serviceProvider.serviceSelected = undefined;
      }, 500);
    });
  }

  protected createFromForm(): Service {
    let service: Service = new Service();
    let formValue: any = this.form.value;
    service.name = formValue.name;
    service.description = formValue.description;
    service.price = formValue.price;
    service.duration = formValue.duration;
    service.genre = formValue.genre;
    service.id = this.serviceProvider.serviceSelected?.id;
    return service;
  }

}
