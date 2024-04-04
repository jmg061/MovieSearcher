import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [ToolbarModule, MenubarModule, ButtonModule, DropdownModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss'
})
export class CabeceraComponent {
  opciones: string[] | undefined;
  ngOnInit() {
    this.opciones = [
        "Peliculas vistas",
        "Peliculas pendientes"
    ];
  }
}
