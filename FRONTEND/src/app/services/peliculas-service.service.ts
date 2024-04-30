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
  private linkStart = 'https://api.themoviedb.org/3/movie/';
  private linkEnd = '?language=es-ES&page=';
  private getMethod = 'GET';
  private options = {headers: {Authorization: 'Bearer ' + this.token}};

  constructor(private http : HttpClient) { }

  getPopulares(pagenumber: number) {

      return this.http.request<mdbtemplate>(this.getMethod, this.linkStart + 'popular' + this.linkEnd + pagenumber, this.options);

  }

  getEstrenos(pagenumber: number) {

    return this.http.request<mdbtemplate>(this.getMethod, this.linkStart + 'upcoming' + this.linkEnd + pagenumber, this.options);

  }

  getTopRated(pagenumber: number) {

    return this.http.request<mdbtemplate>(this.getMethod, this.linkStart + 'top_rated' + this.linkEnd + pagenumber, this.options);

  }

  getPeliculas(): Observable<pelicula[]> {
    return of(PELICULAS);
  }
}
