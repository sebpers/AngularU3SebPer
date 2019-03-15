import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

// This component handles array, add and pop

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
// Handles user events, such as delete user, add, check user and jSon lists 
export class DashbordComponent {
  // List of added users
  userList: object[] = [];
  user: string;

  constructor(private authService: AuthService) {
    // Gets returned value into user
    this.user = this.authService.checkIfLoggedIn();

    // Gets the whole jSON list and puts it in an object array if its true, otherwise log an error
    this.authService.getJsonUsers()
      .subscribe(
        (response) =>
          this.userList = response
        ,
        (error) => console.log('error', error),
        () => console.log('completed')
      );
  }


  // Removes the error in console if someone clicks on add
  addUser(event: string) {
    if (event !== "") {
    }
  }

  // Function delete last user name from list
  deleteUser(): void {
    this.userList.pop();
  }

  // Gets returned key value from localStorage and puts it in user
  checkIfUserLoggedIn(): void {
    this.user = this.authService.checkIfLoggedIn();
  }

}
