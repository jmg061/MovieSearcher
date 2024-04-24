import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PopularComponent } from './componentes/popular/popular.component';

export const routes: Routes = [

    
    { path: 'Popular', component: PopularComponent },
    { path: '', redirectTo: 'Popular', pathMatch: 'full' }


];
