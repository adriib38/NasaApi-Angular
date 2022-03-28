import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FotoDelDiaModule } from './foto-del-dia/foto-del-dia.module';
import { TierraFormularioComponent } from './tierra/components/tierra-formulario/tierra-formulario.component';
import { TierraPantallaComponent } from './tierra/components/tierra-pantalla/tierra-pantalla.component';
import { TierraModule } from './tierra/tierra.module';
import { FormsModule } from '@angular/forms';
import { TierraResultadoComponent } from './tierra/components/tierra-resultado/tierra-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FotoDelDiaModule,
    TierraModule,
    
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
