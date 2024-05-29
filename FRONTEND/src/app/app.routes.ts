import { Routes } from '@angular/router';
import { PopularComponent } from './componentes/popular/popular.component';
import { ProximosestrenosComponent } from './componentes/proximosestrenos/proximosestrenos.component';
import { TopvotadasComponent } from './componentes/topvotadas/topvotadas.component';
import { PeliculadetalleComponent } from './componentes/peliculadetalle/peliculadetalle.component';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';

export const routes: Routes = [

    
    { path: 'populares', component: PopularComponent },
    { path: 'proximosestrenos', component: ProximosestrenosComponent},
    { path: 'topvotadas', component: TopvotadasComponent},
    { path: 'detalle/:titulo', component: PeliculadetalleComponent},
    { path: 'pendientes', component: PendientesComponent},
    { path: '**', redirectTo: 'populares'},
    { path: '', redirectTo: 'populares', pathMatch: 'full' }


];
