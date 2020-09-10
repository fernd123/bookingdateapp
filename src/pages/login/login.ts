import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { EmployeePage } from '../employee/employee';
import { HomePage } from 'src/app/home/home.page';
import { User } from '../../models/user-model';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ParentComponent } from 'src/shared/component/parent.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends ParentComponent {

  title: string = environment.login;

  constructor(
    public userProvider: UserProvider,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public router: Router,
    public loadingCtrl: LoadingController,
    public modalController: ModalController
  ) {
    super(loadingCtrl, formBuilder, modalController);
  }

  ngOnInit() {
    this.form = this.buildFormGroup();
  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: 'a',
      password: '123'
    });
  }

  register() {
    this.router.navigateByUrl('/register');
  }

  login() {
    let email: string = this.form.value.email;
    let password: string = this.form.value.password;
    var self = this;
    this.showLoading(environment.loading);

    this.userProvider.getUserByEmailAndPassword(email, password)
      .subscribe(async cliente => {
        localStorage.setItem('userLoged', JSON.stringify(cliente));
        self.userProvider.userLoged = cliente;

        if (this.userProvider.userLoged == undefined) {
          self.loading != undefined ? self.loading.dismiss() : '';
          self.userProvider.userLoged = new User();
          let alert = this.alertCtrl.create({
            header: environment.incorrectcredentials,
            buttons: [environment.ok]
          });
          (await alert).present();
        } else {
          setTimeout(function () {
            self.loading.dismiss();
          }, 200);
          this.router.navigateByUrl('/userHome');

          /*if (self.userProvider.userLoged.isAdmin || self.userProvider.userLoged.isEmployee) {
            this.router.navigateByUrl('/employee');
          } else if (self.userProvider.userLoged.isCustomer) {
            this.router.navigateByUrl('/customer');
          }*/
        }
      },
        (async error => {
          let alert = this.alertCtrl.create({
            header: environment.incorrectcredentials,
            buttons: [environment.ok]
          });
          (await alert).present();
          setTimeout(function () {
            self.loading.dismiss();
          }, 200);
        }));
  }

}
