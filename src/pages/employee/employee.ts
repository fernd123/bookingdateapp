import { Component, ViewChild } from '@angular/core';
import { ModalController, LoadingController, MenuController } from '@ionic/angular';
import { User } from '../../models/user-model';
import { ManageEmployeePage } from './manage-employee/manage-employee';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ParentComponent } from 'src/shared/component/parent.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage extends ParentComponent {

  title: string = environment.employeeLbl;
  searchInput: string;
  @ViewChild('searchInputSearchB') searchInputSearchB: any;

  constructor(
    public router: Router,
    public userProvider: UserProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private menu: MenuController) {
    super(loadingCtrl, formBuilder, modalController);
    this.showLoading(environment.loading);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EmployeePage');
    let self = this;

    this.userProvider.getEmployees().subscribe(function (employees) {
      self.userProvider.employeeList = employees;
      self.loading.dismiss();
    });

    if (this.searchInput != undefined && this.searchInput.length != 0) {
      this.userProvider.getEmpoyeesByValue(this.searchInput);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }


  public onInput($event) {
    console.log('Input: ' + this.searchInputSearchB.value);
    this.userProvider.getEmpoyeesByValue(this.searchInputSearchB.value);
  }

  public onCancel($event) {
    console.log('Input: ' + this.searchInput);
    let self = this;
    this.userProvider.getEmployees().subscribe(function (employees) {
      self.userProvider.employeeList = employees;
    });
  }

  public addEmployee() {
    this.presentModal('currentEmployee', new User(), ManageEmployeePage);
  }

  public editEmployee(employee: User) {
    this.userProvider.userSelected = employee;
    this.presentModal('currentEmployee', employee, ManageEmployeePage);
  }

}