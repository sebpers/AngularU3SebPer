import { Component, Input } from '@angular/core';

// This component handles true or false, color toggle

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // Boolean, change color on user text
  textColor: boolean = true;

  // user list from dashboard
  @Input() users: object[];

  // Swap between true and false
  toggleTextColor(): void {
    this.textColor = !this.textColor;
  }
}
