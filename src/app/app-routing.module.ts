import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { DadosCitaComponent } from './components/dados-cita/dados-cita.component';

const Api_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'crear-cita' },
    { path: 'list-citas', component: ListCitasComponent },
    { path: 'crear-cita', component: CrearCitaComponent },
    { path: 'dados-cita/:id', component: DadosCitaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(Api_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }