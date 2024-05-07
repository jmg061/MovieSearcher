import { Component, HostListener } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { User } from '../../templates/usuario';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MenubarModule, ButtonModule, DropdownModule, RouterLink, DialogModule, InputTextModule, PasswordModule, FormsModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss'
})
export class CabeceraComponent{

  constructor(private appService: AppService) { }

  /**************Elementos Dialogos*/
    
  usuario: string = '';
  password: string = '';
  rpassword: string = '';
   
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

  iniciarSesion() {

    if(this.usuario == '' || this.password == ''){
      alert('Rellena los campos');
      return;
    }

    /*if(this.usuario == 'admin' && this.password == 'admin'){
      this.appService.setUser({usuario: this.usuario, contrasenna: this.password});
      this.user = this.appService.getUser();
      this.dialogInicioSesion = false;
      this.usuario = '';
      this.password = '';
    }*/
    this.appService.inicioSesion(this.usuario, this.password).subscribe({
        
        next: (data) => {
          this.appService.setUser(data as User);
          this.user = this.appService.getUser();
          this.dialogInicioSesion = false;
          this.usuario = '';
          this.password = '';
        },
        error: (error) => {
          error.status == 404 ? alert('Usuario no registrado') : alert('Error al iniciar sesion');
        },
        complete: () => {
          
        }
      });
  }

  registro() {
    this.appService.registro({usuario: this.usuario, contrasenna: this.password}).subscribe({

      next: (data) => {
        if(data.id == -1){
          alert('Usuario ya registrado');
          return;
        }
        this.appService.setUser(data as User);
        this.user = this.appService.getUser();
        this.dialogRegistro = false;
        this.usuario = '';
        this.password = '';
        this.rpassword = '';
      },
      error: (error) => {
        alert('Error al registrar');
      },
      complete: () => {
        
      }
    });
  }

  logout() {
    this.appService.setUser(undefined);
    this.user = this.appService.getUser();
  }

  onHide() {
    this.usuario = '';
    this.password = '';
    this.rpassword = '';
  }
}
