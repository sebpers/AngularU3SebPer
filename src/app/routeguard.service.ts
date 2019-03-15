import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  user: string;
  constructor(private auth_service: AuthService, private _router: Router) { }

  // Controls if this.user has a value, if it is null or undefined, reject it, otherwise return true and gain access to dashboard
  canActivate(): boolean {
    this.user = this.auth_service.checkIfLoggedIn();

    if (this.user === null || this.user === undefined) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

}