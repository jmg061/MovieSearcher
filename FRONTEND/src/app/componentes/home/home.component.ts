import { Component } from '@angular/core';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
