import { Component } from '@angular/core';
import { pelicula } from '../../templates/pelicula';

@Component({
  selector: 'app-peliculadetalle',
  standalone: true,
  imports: [],
  templateUrl: './peliculadetalle.component.html',
  styleUrl: './peliculadetalle.component.scss'
})
export class PeliculadetalleComponent {

  peli:pelicula = {
    id: 1,
    titulo: "patata",
    imagen: "https://image.tmdb.org/t/p/w500/ivhOeG5S2CzKjcKhureKAtfonHg.jpg",
    descripcion: "Ah",
    fecha: "ayer mismo",
    puntuacion: 10,
    originaltitle: "Ah pero en ingles",
  }

}
