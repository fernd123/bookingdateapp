import { User } from './../../models/user-model';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { UserProvider } from '../../providers/user-p/user-p';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParentComponent } from 'src/shared/component/parent.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-userHome',
  templateUrl: 'userHome.html',
})
export class UserHomePage extends ParentComponent {

  title: string = environment.menu;

  constructor(
    public userProvider: UserProvider,
    public router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public modalController: ModalController
  ) {
    super(loadingCtrl, formBuilder, modalController);
  }

  logout() {
    localStorage.removeItem('userLoged');
    this.router.navigateByUrl('/login');
  }
}