import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from './service/crud.service';

//Componentes
import { AppComponent } from './app.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { DadosCitaComponent } from './components/dados-cita/dados-cita.component';



@NgModule({
  declarations: [
    AppComponent,
    ListCitasComponent,
    CrearCitaComponent,
    DadosCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
