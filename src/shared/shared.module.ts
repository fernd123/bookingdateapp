import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderPage } from './components/header/header.page';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [HeaderPage],
    entryComponents: [],
    providers: [],
    exports: [
        CommonModule, FormsModule,
        ReactiveFormsModule,
        HeaderPage
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}