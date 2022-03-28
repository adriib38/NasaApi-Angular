import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { TierraFormularioComponent } from './components/tierra-formulario/tierra-formulario.component';
import { TierraPantallaComponent } from './components/tierra-pantalla/tierra-pantalla.component';
import { FormsModule } from '@angular/forms';
import { TierraResultadoComponent } from './components/tierra-resultado/tierra-resultado.component';
import { AppComponent } from '../app.component';
import { TierraService } from '../services/tierra.service';


@NgModule({
  declarations: [

    TierraPantallaComponent,
    TierraFormularioComponent,
    TierraResultadoComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    TierraPantallaComponent,
    TierraFormularioComponent,
    TierraResultadoComponent
  ],
  providers:[
    TierraService
  ]}

  )

export class TierraModule { }
