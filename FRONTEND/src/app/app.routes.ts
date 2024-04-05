import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TopVistasComponent } from './componentes/top-vistas/top-vistas.component';

export const routes: Routes = [

    
    { path: 'Top-Vistas', component: TopVistasComponent },
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' }


];
