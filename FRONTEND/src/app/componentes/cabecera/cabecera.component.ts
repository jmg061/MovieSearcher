import { Component, HostListener } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { User } from '../../templates/user';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MenubarModule, ButtonModule, DropdownModule, RouterLink, DialogModule, InputTextModule, PasswordModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss'
})
export class CabeceraComponent {



  constructor(private appService: AppService) { }

  /**************Elementos Dialogos*/
    
  usuario: string = '';
  password: string = '';
   
  /**************/

  user?: User = this.appService.getUser();
  dialogInicioSesion: boolean = false;
  dialogRegistro: boolean = false;

  /*@HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 1){
      this.isNavbarFixed = true;
    }else{
      this.isNavbarFixed = false;
    }
  }*/
  //opciones: string[] | undefined;
  //isNavbarFixed: boolean = false;
  /*ngOnInit() {
   this.opciones = [
        "Peliculas vistas",
        "Peliculas pendientes"
    ];

  }*/

  showIniciarSesionDialog() {
    if(this.dialogRegistro)
      this.dialogRegistro = false;
    this.dialogInicioSesion = true;
  }

  showRegistroDialog() {
    if(this.dialogInicioSesion)
      this.dialogInicioSesion = false;
    this.dialogRegistro = true;
  }
}
