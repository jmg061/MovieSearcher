import { Component, HostListener } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MenubarModule, ButtonModule, DropdownModule, RouterLink],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss'
})
export class CabeceraComponent {


  /*@HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 1){
      this.isNavbarFixed = true;
    }else{
      this.isNavbarFixed = false;
    }
  }*/
  opciones: string[] | undefined;
  isNavbarFixed: boolean = false;
  ngOnInit() {
    this.opciones = [
        "Peliculas vistas",
        "Peliculas pendientes"
    ];
  }
}
