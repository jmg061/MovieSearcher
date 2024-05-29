import { Component, OnInit } from '@angular/core';
import { pelicula } from '../../templates/pelicula';
import { AppService } from '../../services/app.service';
import { ButtonModule } from 'primeng/button';
import { User } from '../../templates/usuario';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-peliculadetalle',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './peliculadetalle.component.html',
  styleUrl: './peliculadetalle.component.scss',
  providers: [CookieService]
})
export class PeliculadetalleComponent implements OnInit{
  addPeliVista() {
  
  if(this.usuario == undefined)
    return;
  

  if(this.usuario.peliculasPendientes == undefined)
    this.usuario.peliculasPendientes = [];
  
  this.usuario.peliculasPendientes.push(this.peli);
  console.log(this.usuario.peliculasPendientes);
  this.appservice.updateUsuario(this.usuario).subscribe({
    next: (data) => {
     
    },
    error: (error) => {
      
    },
    complete: () => {
      //this.cs.set('user', JSON.stringify(this.usuario));
    }
  });
  this.contenida = true;
  }

deletePeliVista() {
  
  if(this.usuario == undefined)
    return;
  

  if(this.usuario.peliculasPendientes == undefined)
    return;
  
  this.usuario.peliculasPendientes.splice(this.usuario.peliculasPendientes.indexOf(this.peli), 1);
  console.log(this.usuario.peliculasPendientes);
  this.appservice.updateUsuario(this.usuario).subscribe({
    next: (data) => {
     
    },
    error: (error) => {
      
    },
    complete: () => {
      //this.cs.set('user', JSON.stringify(this.usuario));
    }
  });
  this.contenida = false;
}

  constructor(private appservice:AppService, private cs: CookieService/*, private subscription: Subscription*/) { }

  private subscription!: Subscription;


  usuario?: User = this.appservice.getUser();
  peli!: pelicula;
  pagina: string = "Cargando...";
  audiencia: string = "Cargando...";
  contenida: boolean = false;

  ngOnInit(): void {

    this.subscription = this.appservice.cambio$.subscribe(() => {
      this.usuario = this.appservice.getUser();
    });

    //this.usuario = this.appservice.getUser();
    /*if(this.usuario == undefined){
      this.usuario = this.cs.get('user') ? JSON.parse(this.cs.get('user')) : undefined;
    }*/
    this.peli = this.appservice.getPeli();
    /*if(this.peli == undefined){
      this.peli = this.cs.get('peli') ? JSON.parse(this.cs.get('peli')) : undefined;
    }*/
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
    if(this.usuario != undefined && this.usuario.peliculasPendientes != undefined)
    for(let i = 0; i < this.usuario.peliculasPendientes.length; i++){
      if(this.usuario.peliculasPendientes[i].id == this.peli.id){
        this.contenida = true;
        break;
      }
    }
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
