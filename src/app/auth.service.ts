import { Injectable } from '@angular/core';
import { AdminLogin } from './admin-login.model';
import { AdminFull } from './admin-full.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Handle user login/logout/verifier
export class AuthService {

  urls: any = {
    jsonUser: 'https://jsonplaceholder.typicode.com/users'
  }

  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(private http: HttpClient) {

  }
  // returns the whole jSON user list to dashboard
  public getJsonUsers(): Observable<any> {
    return this.http.get(this.urls.jsonUser);
  }

  // Return clicked users id to dashboard
  public getJsonUser(id: string): Observable<any> {
    return this.http.get(this.urls.jsonUser + '/' + id);
  }


  // Returns the value in localStorage
  checkIfLoggedIn(): string {
    return localStorage.getItem('user');
  }

  // Set username (email) in local storage
  login(adminModel: AdminLogin) {
    // Loop through admin object 
    for (let i = 0; i < this.admins.length; i++) {

      // compare looped admin.email and password it with adminModel email and password, if validated, set localstorage
      if (adminModel.email === this.admins[i].email && adminModel.password === this.admins[i].password) {
        // set the adminModel.email as user
        localStorage.setItem('user', adminModel.email);
        break;
      }
    }
  }

  // Clear localStorage
  logout(): void {
    localStorage.clear();
  }

}
