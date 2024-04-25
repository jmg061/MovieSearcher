import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { pelicula } from '../../templates/pelicula';
import { mdbtemplate } from '../../templates/mdbtemplate';
import { peliculamdb } from '../../templates/peliculamdb';
import { PeliculasServiceService } from '../../services/peliculas-service.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-topvotadas',
  standalone: true,
  imports: [CabeceraComponent, CommonModule, CardComponent, PaginatorModule],
  templateUrl: './topvotadas.component.html',
  styleUrl: './topvotadas.component.scss',
})
export class TopvotadasComponent implements OnInit {
  constructor(private peliculasService: PeliculasServiceService) {}

  ngOnInit(): void {
    this.cargarPeliculas(1);
  }

  peliculas!: pelicula[];
  results: number = 0;

  cargarPeliculas(page: number) {
    //console.log('PopularComponent.ngOnInit()');
    this.peliculasService.getTopRated(page).subscribe({
      next: (data) => {
        //console.log('PopularComponent.ngOnInit().subscribe.next()');
        //console.log(data);
        this.results = (data as mdbtemplate).total_results;
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
              original_title: peliculamdb.original_title,
            };
          }
        );
        //console.log(this.peliculas);
      },
      error: (error) => {
        //console.log('PopularComponent.ngOnInit().subscribe.error()');
        //console.log(error);
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
