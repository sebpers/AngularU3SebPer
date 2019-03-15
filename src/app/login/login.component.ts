import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminLogin } from '../admin-login.model';

// Call on different components to send and get information

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// Handles login, logout and check validated username and password
export class LoginComponent implements OnInit {
  // Gets the checked user value from checkUser()
  loggedUser: string;

  // Put the admin login variable inside of model
  model: AdminLogin = new AdminLogin('', '');

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Calls on checkUser() after all variables are called
    this.checkUser();
  }

  // Calls authService logout
  logout(): void {
    this.authService.logout();
  }

  // Calls authService.checkIfLoggedIn(); and gets the key value and put it in loggedUser
  checkUser(): void {
    this.loggedUser = this.authService.checkIfLoggedIn();
  }

  // On call, send the the loginAdmin model with information to login() in auth.services
  onSubmit(): void {
    this.authService.login(this.model);
  }
}
