import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Company } from './../../models/company-model';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'parent-component'
})
export class ParentComponent {

    public form: FormGroup;
    public title = '';
    public loading: any;
    public environment = environment;

    constructor(
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        public modalController: ModalController
    ) {

    }

    ngOnInit() {
        this.form = this.buildFormGroup();
    }

    protected buildFormGroup(): FormGroup {
        return this.formBuilder.group({
        });
    }

    protected createFromForm(): any { }

    async showLoading(message: string) {
        this.loading = await this.loadingCtrl.create({
            message: message
        });
        this.loading.present();
    }

    async presentModal(currentObj: string, obj: any, component: any) {
        const modal = await this.modalController.create({
            cssClass: "my-modal",
            component: component,
            componentProps: {
                currentObj: obj
            }
        });
        return await modal.present();
    }

}
