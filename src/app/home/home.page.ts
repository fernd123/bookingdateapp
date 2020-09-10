import { CustomerAppointmentHistoryPage } from '../../pages/customer-appointment/history/customer-appointment-history';
import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, NavParams } from '@ionic/angular';
import { AppointmentPage } from '../../pages/appointment/appointment';
import { CustomerAppointmentPage } from '../../pages/customer-appointment/customer-appointment';
import { LoginPage } from '../../pages/login/login';
import { EmployeePage } from '../../pages/employee/employee';
import { CompanyinfoPage } from '../../pages/companyinfo/companyinfo';
import { ServicesPage } from '../../pages/services/services';
import { UserProvider } from '../../providers/user-p/user-p';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public navParams = new NavParams();

  @ViewChild('contenido') contenido: NavController;
  usuarioEstaConectado = true;
  companyPage: any = CompanyinfoPage;
  employeePage: any = EmployeePage;
  loginPage: any = LoginPage;
  servicesPage: any = ServicesPage;
  appointmentPage: any = AppointmentPage;
  appointmentCustomerPage: any = CustomerAppointmentPage;
  appointmentCustomerHistoryPage: any = CustomerAppointmentHistoryPage;
  rootPage: any = undefined;

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController, public userProvider: UserProvider) {
    if (userProvider.userLoged == undefined) {
      this.rootPage = this.loginPage;
    } else if (userProvider.userLoged.isAdmin) {
      this.rootPage = this.employeePage;
    } else if (userProvider.userLoged.isCustomer) {
      this.rootPage = this.appointmentCustomerPage;
    } else if (userProvider.userLoged.isEmployee) {
      this.rootPage = this.employeePage;
    }
  }

  loadPage(pagina) {
    this.contenido.navigateRoot(pagina);
    this.menuCtrl.close();
  }
}
