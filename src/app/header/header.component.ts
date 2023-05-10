import { Component } from '@angular/core';
import {UserService} from "../../service/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userSignedIn = null;
  constructor(private userService:UserService) {
  }

  isLoggedIn():boolean{
    let user;
    this.userService.getCurrentUser().subscribe(data=>user = data);
    // @ts-ignore
    return user.role == 'Guest' ?false : true;

  }

  logOut() {
    this.userService.logout();
  }

  isAdmin():boolean {
    let user;
    this.userService.getCurrentUser().subscribe(data=>user = data);
    // @ts-ignore
    return user.role == 'Admin' ? true : false;
  }

  isAdminOrManager() {
    let user;
    this.userService.getCurrentUser().subscribe(data=>user = data);
    // @ts-ignore
    return user.role == 'Admin' ? true : user.role=='Manager' ? true : false;
  }
}
