import { Injectable } from '@angular/core';
import { User } from '../templates/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private user?: User;

  setUser(user: User|undefined) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }


}
