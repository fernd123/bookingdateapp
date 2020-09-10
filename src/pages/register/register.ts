import { User } from './../../models/user-model';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { UserProvider } from '../../providers/user-p/user-p';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParentComponent } from 'src/shared/component/parent.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends ParentComponent {

  @ViewChild('genre') genre: any;
  title: string = environment.register;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    public userProvider: UserProvider
  ) {
    super(loadingCtrl, formBuilder, modalController);

  }

  protected buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      isActive: true,
      isCustomer: true,
      isAdmin: false,
      isEmployee: false,
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [undefined, Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      genre: ['Hombre', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back() {
    this.router.navigateByUrl('/home');
  }

  onSubmit() {
    var self = this;
    let user: User = this.createFromForm();

    this.userProvider.create(user, true).subscribe(async function (response) {
      console.log(response);
      let alert = self.alertCtrl.create({
        header: 'Usuario registrado con éxito',
        buttons: ['OK']
      });
      (await alert).present();;
      self.back();
    }, (function (error) {
      console.log(error);
    }));
  }

  protected createFromForm(): User {
    let user: User = new User();
    let formValue: any = this.form.value;
    user.isActive = true;
    user.isCustomer = true;
    user.isAdmin = false;
    user.isEmployee = false;
    user.name = formValue.name;
    user.lastname = formValue.lastname;
    user.phone = formValue.phone;
    user.password = formValue.password;
    user.email = formValue.email;
    user.genre = this.genre.value;

    return user;
  }
}