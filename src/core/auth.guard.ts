import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserProvider } from 'src/providers/user-p/user-p';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        public userProvider: UserProvider) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (localStorage.getItem('userLoged') == null) {
            console.log('No estás logueado');
            this.router.navigate(['/login']);
            return false;
        }
        let userLogedObj = localStorage.getItem('userLoged');
        if (userLogedObj != undefined)
            this.userProvider.userLoged = JSON.parse(userLogedObj);

        return true;
    }
}