import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { id:1,username: 'admin', password: 'admin123', role: 'Admin' },
    { id:2,username: 'manager', password: 'manager123', role: 'Manager' },
    { id:3,username: 'user', password: 'user123', role: 'User' },
    { id:4,username: 'visitor', password: 'visitor123', role: 'Guest' }
  ];

   currentUser = null;
   roleAs:any;

  constructor() { }

  getAllUsers():Observable<any>{
    localStorage.setItem('users', JSON.stringify(this.users));
    // @ts-ignore
    let users = JSON.parse(localStorage.getItem('users'));
    return of(users);
  }

  login(username: any, password: any): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // @ts-ignore
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      console.log(this.currentUser)
      // @ts-ignore
      console.log(JSON.parse(localStorage.getItem('currentUser')));
      localStorage.setItem('STATE','TRUE');
      localStorage.setItem('ROLE',user.role);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('STATE');
    localStorage.setItem('ROLE','Guest');
  }
  signIn(username: string, password: string) {
    let user = {id:Math.random(),username:username, password:password,role:'User'};
    this.users.push(user);

    // @ts-ignore
    let users = JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    this.setCurrentUser(user);
  }

  editUser(user:any){
    this.deleteById(user.id);
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));

  }

  setCurrentUser(user:any){
    console.log(this.currentUser);

    if (this.currentUser==this.users[3] || this.currentUser==null) {
      // @ts-ignore
      this.currentUser = user;
      console.log(this.currentUser);
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    }
  }
  getCurrentUser(): Observable<any> {
    if (!this.currentUser) {
      const currentUserJSON = localStorage.getItem('currentUser');
      if(!currentUserJSON){
        // @ts-ignore
        this.currentUser = this.users[3];
      }
      else if (currentUserJSON) {
        this.currentUser = JSON.parse(currentUserJSON);
      }
    }
    return of(this.currentUser);
  }

  isLoggedIn():boolean {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'TRUE')
      return true;
    else
      return false;
  }
  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }

  getCurrentUserId(): Observable<number> {
    return this.getCurrentUser().pipe(
      map(user => user.id)
    );
  }

  deleteById(id: number): void {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    // @ts-ignore
    let index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    this.users.splice(index, 1);
    // @ts-ignore
    console.log(JSON.parse(localStorage.getItem(this.storageKey)));
  }

  findById(id: any): Observable<any> {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    // @ts-ignore
    let index = users.findIndex((user) => user.id == id);
    console.log(users[index]);
    return of(users[index]);
  }
}
