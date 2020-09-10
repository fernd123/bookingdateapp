import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { User } from '../../../models/user-model';
import { UserProvider } from './../../../providers/user-p/user-p';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParentComponent } from 'src/shared/component/parent.component';


@Component({
  selector: 'page-manageemployee',
  templateUrl: 'manage-employee.html',
})

export class ManageEmployeePage extends ParentComponent {

  title: string = environment.employeeProfile;
  employeeList: User[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userProvider: UserProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalController: ModalController
  ) {
    super(loadingCtrl, formBuilder, modalController);
  }


  ngOnInit() {
    this.form = this.buildFormGroup();
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      isActive: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.isActive : true,
      isCustomer: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.isCustomer : true,
      isAdmin: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.isAdmin : false,
      isEmployee: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.isEmployee : true,
      name: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.name : '',
      lastname: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.lastname : '',
      phone: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.phone : '',
      password: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.password : '',
      email: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.email : '',
      genre: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.genre : 'Hombre',
      id: this.userProvider.userSelected != undefined ? this.userProvider.userSelected.id : undefined
    });
  }

  ionViewDidLoad() {
    let employeeSelected = this.userProvider.userSelected;
    if (employeeSelected != undefined && employeeSelected != null) {
      this.title = environment.editEmployeeTitle + ` ${employeeSelected.name} ${employeeSelected.lastname}`;
    } else {
      this.title = environment.newEmployeeTitle;
    }
  }

  onSubmit() {
    let self = this;
    this.userProvider.userSelected = this.createFromForm();
    this.userProvider.saveUser().subscribe(async function (user) {
      let alert = self.alertCtrl.create({
        header: environment.successEmployeeCreated,
        buttons: [environment.ok]
      });
      (await alert).present();
      self.close();
    });
  }

  async removeEmployee() {
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
            this.userProvider.delete(this.userProvider.userSelected.id).subscribe(async response => {
              let alert = this.alertCtrl.create({
                header: environment.successEmployeeRemoved,
                buttons: [environment.ok]
              });
              this.close();
              (await alert).present();
            });
          }
        }
      ]
    });
    (await alert).present();
  }

  close() {
    let self = this;
    this.userProvider.getEmployees().subscribe(function (employees) {
      self.userProvider.employeeList = employees;
      self.modalController.dismiss();
      setTimeout(function () {
        self.userProvider.userSelected = undefined;
      }, 500);
    });
  }

  isNotMe() {
    if (this.userProvider.userLoged.id == this.userProvider.userSelected.id) {
      return false;
    }
    return true;
  }

  protected createFromForm(): User {
    let user: User = new User();
    let formValue: any = this.form.value;
    user.isEmployee = true;
    user.isActive = formValue.isActive;
    user.isCustomer = formValue.isCustomer;
    user.isAdmin = formValue.isAdmin;
    user.name = formValue.name;
    user.lastname = formValue.lastname;
    user.phone = formValue.phone;
    user.password = formValue.password;
    user.email = formValue.email;
    user.genre = formValue.genre;
    user.id = this.userProvider.userSelected?.id;

    return user;
  }
}
