import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CardComponent } from './componentes/card/card.component';
import { PeliculadetalleComponent } from './componentes/peliculadetalle/peliculadetalle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, CardComponent, PeliculadetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND';
}
