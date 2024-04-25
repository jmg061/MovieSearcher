import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pelicula } from '../templates/pelicula';
import { PELICULAS } from '../mockups/peliculas';
import { mdbtemplate } from '../templates/mdbtemplate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTk3ZjQ5ODJjM2ViNmNmM2I3NDc4MmY5OWJmZmUzOSIsInN1YiI6IjY2MGM3MjU3ZTAzOWYxMDE2MmU1NGZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4AkiEWRf-zTNEQsA0rbs-1BD2wOeMf4Xjw54PmDcGE';

  constructor(private http : HttpClient) { }

  getPopulares(pagenumber: number) {

      return this.http.request<mdbtemplate>('GET', 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=' + pagenumber, {headers: {Authorization: 'Bearer ' + this.token}});

  }

  getEstrenos(pagenumber: number) {

    return this.http.request<mdbtemplate>('GET', 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=' + pagenumber, {headers: {Authorization: 'Bearer ' + this.token}});

  }

  getTopRated(pagenumber: number) {

    return this.http.request<mdbtemplate>('GET', 'https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=' + pagenumber, {headers: {Authorization: 'Bearer ' + this.token}});

  }

  getPeliculas(): Observable<pelicula[]> {
    return of(PELICULAS);
  }
}
