import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


// single user component shows clicked users information

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  // user uses to write out clicked used on screen
  userId: string;
  userInfo: object;

  constructor(private activated_route: ActivatedRoute, private authService: AuthService) {

    this.activated_route.params.subscribe((params): void => {
      // gives user an "id"
      this.userId = params.id;
    });

  }

  ngOnInit(): void {
    // Subscribe on this.userId and subscribe on it to get the whole user and sends the user information to a new object
    this.authService.getJsonUser(this.userId).subscribe(
      (response) => {
        this.userInfo = response;
      }
    )
  }
}
