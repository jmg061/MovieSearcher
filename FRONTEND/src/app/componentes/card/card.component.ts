import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { pelicula } from '../../templates/pelicula';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private appService: AppService,
              private router: Router
  ) { }

  @Input() peli!: pelicula;

  pantallaDetalle(pelicula: pelicula) {
    this.appService.setPeli(pelicula);
    this.router.navigate(['detalle', pelicula.titulo]);
  }

}
