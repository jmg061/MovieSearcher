import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pelicula } from '../templates/pelicula';
import { PELICULAS } from '../mockups/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  constructor() { }

  getPeliculas(): Observable<pelicula[]> {
    return of(PELICULAS);
  }
}
