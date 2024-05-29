import { Component, OnInit } from '@angular/core';
import { User } from '../../templates/usuario';
import { AppService } from '../../services/app.service';
import { pelicula } from '../../templates/pelicula';
import { CardComponent } from "../card/card.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pendientes',
    standalone: true,
    templateUrl: './pendientes.component.html',
    styleUrl: './pendientes.component.scss',
    imports: [CardComponent, PaginatorModule, CommonModule]
})
export class PendientesComponent implements OnInit{

  constructor(private appservice: AppService) { }
  ngOnInit(): void {
    console.log(this.peliculasPendientes);
  }

  peliculasPendientes?: pelicula[] = this.appservice.getUser()?.peliculasPendientes;

}
