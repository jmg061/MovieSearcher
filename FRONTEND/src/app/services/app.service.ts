import { Injectable } from '@angular/core';
import { User } from '../templates/usuario';
import { pelicula } from '../templates/pelicula';
import { HttpClient } from '@angular/common/http';
import { scrapping } from '../templates/scrapping';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

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

  logout() {
    this.user = undefined;
  }

  registro(usuario: User){
    return this.http.post<User>('http://localhost:8081/data/registro', usuario);
  }

  inicioSesion(usuario: string, contrasenna: string){
    return this.http.get<User>('http://localhost:8081/data/user=' + usuario + '&pass=' + contrasenna);
  }

  getPuntuacion(id: number){
    return this.http.get<scrapping>('http://localhost:8081/data/scrapping=' + id);
  }

}
