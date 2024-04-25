import { Routes } from '@angular/router';
import { PopularComponent } from './componentes/popular/popular.component';
import { ProximosestrenosComponent } from './componentes/proximosestrenos/proximosestrenos.component';
import { TopvotadasComponent } from './componentes/topvotadas/topvotadas.component';

export const routes: Routes = [

    
    { path: 'populares', component: PopularComponent },
    { path: 'proximosestrenos', component: ProximosestrenosComponent},
    { path: 'topvotadas', component: TopvotadasComponent},
    { path: '', redirectTo: 'populares', pathMatch: 'full' }


];
