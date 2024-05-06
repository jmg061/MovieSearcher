import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../templates/pelicula';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-peliculadetalle',
  standalone: true,
  imports: [],
  templateUrl: './peliculadetalle.component.html',
  styleUrl: './peliculadetalle.component.scss'
})
export class PeliculadetalleComponent implements OnInit{

  constructor(private appservice:AppService) { }

  peli!: pelicula;

  ngOnInit(): void {
    this.peli = this.appservice.getPeli();
  }

  /*peli:pelicula = {
    id: 1,
    titulo: "Ah",
    imagen: "https://image.tmdb.org/t/p/w500/ivhOeG5S2CzKjcKhureKAtfonHg.jpg",
    descripcion: "patata",
    fecha: "ayer mismo",
    originaltitle: "Ah pero en ingles",
  }*/

}
