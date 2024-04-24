import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../templates/pelicula';
import { PELICULAS } from '../../mockups/peliculas';
import { mdbtemplate } from '../../templates/mdbtemplate';
import { PeliculasServiceService } from '../../services/peliculas-service.service';
import { CardComponent } from '../card/card.component';
import { peliculamdb } from '../../templates/peliculamdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit {

  constructor(private peliculasService: PeliculasServiceService) { }

  ngOnInit(): void {

    //console.log('PopularComponent.ngOnInit()');
    this.peliculasService.getPopulares(1).subscribe({
      next: (data) => {
        //console.log('PopularComponent.ngOnInit().subscribe.next()');
        //console.log(data);
        this.peliculas = (data as mdbtemplate).results.map((peliculamdb: peliculamdb) => {
          return {
            id: peliculamdb.id,
            titulo: peliculamdb.title,
            imagen: 'https://image.tmdb.org/t/p/w500' + peliculamdb.poster_path,
            descripcion: peliculamdb.overview,
            fecha: peliculamdb.release_date,
            puntuacion: peliculamdb.vote_average
          }
        });
        console.log(this.peliculas);
      },
      error: (error) => {
        //console.log('PopularComponent.ngOnInit().subscribe.error()');
        //console.log(error);
      },
      complete: () => {
        //console.log('PopularComponent.ngOnInit().subscribe.complete()');
      }
    
    })
    
  }

  peliculas!: pelicula[];

}
