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
  pagina: string = "Cargando...";
  audiencia: string = "Cargando...";

  ngOnInit(): void {
    this.peli = this.appservice.getPeli();
    this.appservice.getPuntuacion(this.peli.id).subscribe(data => {
      this.pagina = data.tomatometer;
      this.audiencia = data.audienceScore;
      if(this.pagina == ''){
        this.pagina = "No disponible";
      }
      if(this.audiencia == ''){
        this.audiencia = "No disponible";
      }
    });
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
