import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../templates/pelicula';
import { PELICULAS } from '../../mockups/peliculas';
import { mdbtemplate } from '../../templates/mdbtemplate';
import { PeliculasServiceService } from '../../services/peliculas-service.service';
import { CardComponent } from '../card/card.component';
import { peliculamdb } from '../../templates/peliculamdb';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, CardComponent, PaginatorModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent implements OnInit {
  constructor(private peliculasService: PeliculasServiceService) {}

  ngOnInit(): void {
    this.cargarPeliculas(1);
  }

  peliculas!: pelicula[];

  cargarPeliculas(page: number) {
    //console.log("CargarPeliculas: " + page);

    //console.log('PopularComponent.ngOnInit()');
    this.peliculasService.getPopulares(page).subscribe({
      next: (data) => {
        //console.log('PopularComponent.ngOnInit().subscribe.next()');
        //console.log(data);
        this.peliculas = (data as mdbtemplate).results.map(
          (peliculamdb: peliculamdb) => {
            return {
              id: peliculamdb.id,
              titulo: peliculamdb.title,
              imagen:
                'https://image.tmdb.org/t/p/w500' + peliculamdb.poster_path,
              descripcion: peliculamdb.overview,
              fecha: peliculamdb.release_date,
              puntuacion: peliculamdb.vote_average,
              originaltitle: peliculamdb.original_title,
            };
          }
        );
        //console.log(this.peliculas[0].titulo);
        //console.log(this.peliculas);
      },
      error: (error) => {
        //console.log('PopularComponent.ngOnInit().subscribe.error()');
        console.log(error);
      },
      complete: () => {
        //console.log('PopularComponent.ngOnInit().subscribe.complete()');
      },
    });
  }

  onPageChange($event: PaginatorState) {
    if ($event === undefined) return;
    //console.log($event.page);
    this.cargarPeliculas($event.page! + 1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
