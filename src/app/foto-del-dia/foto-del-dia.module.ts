import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoDelDiaComponent } from './components/foto-del-dia/foto-del-dia.component';
import { FotoDelDiaService } from '../services/foto-del-dia.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FotoDelDiaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    FotoDelDiaComponent
  ],
  providers:[
    FotoDelDiaService
  ]}
)



export class FotoDelDiaModule { }
