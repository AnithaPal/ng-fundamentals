import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable()

export class AuthService {
  currentUser:IUser;
  loginUser(userName: string, password: string){
    console.log("logged in");

    this.currentUser = {
      id: 1,
      userName: userName,
      firstName:  'John',
      lastName: 'Paul',
    }

    console.log("Current User info " + this.currentUser.firstName + " " + this.currentUser.lastName);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
 }

}
