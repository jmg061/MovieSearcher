import { Injectable } from '@angular/core';
import { User } from '../templates/user';
import { pelicula } from '../templates/pelicula';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private user?: User;
  private peli!: pelicula;

  setUser(user: User|undefined) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setPeli(peli: pelicula) {
    this.peli = peli;
  }

  getPeli():pelicula {
    return this.peli;
  }

}
