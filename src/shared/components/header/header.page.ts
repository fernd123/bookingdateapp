import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.page.html'
})
export class HeaderPage implements OnInit {

    @Input() title: string;
    @Input() showLanguage: boolean = true;
    @Input() showBack: boolean = true;
    @Input() showCurrentPlayer: boolean = false;


    constructor(
        private _location: Location,
        private router: Router) { }

    ngOnInit() {
    }

    back() {
        this._location.back();
    }
}
