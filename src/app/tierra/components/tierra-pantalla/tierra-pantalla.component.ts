import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/Respuesta';
import { Solicitud } from 'src/app/models/Solicitud';
import { TierraService } from 'src/app/services/tierra.service';

@Component({
  selector: 'app-tierra-pantalla',
  templateUrl: './tierra-pantalla.component.html',
  styleUrls: ['./tierra-pantalla.component.scss']
})
export class TierraPantallaComponent implements OnInit {


  constructor(private servicio: TierraService) { }

  ngOnInit(): void {
  }

  hacerNuevaSolicitud(solicitud:Solicitud) {
    console.log("------------------> Solicitud en tierra-resultado");
    console.log(solicitud)
    this.servicio.leerRespuesta(solicitud);
  }
}
