import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/users.service";

class UsersService {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  login = true;


  constructor(private router: Router, private userService: UserService) { }

  onSubmit() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    let user = this.userService.login(username, password);
    if(this.login){
      user.subscribe(data=>{
      if (data) {
        console.log('true');
        this.userService.setCurrentUser(user);
        this.router.navigate(['/films']);
      } else {
        alert('Invalid email or password');
      }});}
    else { // @ts-ignore
      this.userService.signIn(username,password);
    this.router.navigate(['/films']);}

  }

  signIn() {
    this.login = !this.login;
    console.log("CHanging");
  }

}
