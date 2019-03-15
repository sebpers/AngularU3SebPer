import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// This component handles true / false from
// all new names

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

export class UserListItemComponent {
  // Import user from user list in dashboard
  @Input() user: object;
  // True or false for color swap
  @Input() textColor1: boolean;
  //jsonObject: [];

  constructor(private router: Router, private authService: AuthService) {

  }


  // Go to single-user page and render an "id" to the URL, example, http://localhost:4200/single-user/exampleId
  userClicked(userId: string) {
    this.router.navigate(['/single-user', userId]);
  }
}
