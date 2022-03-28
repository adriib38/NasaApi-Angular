import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Respuesta } from 'src/app/models/Respuesta';
import { Solicitud } from 'src/app/models/Solicitud';


@Component({
  selector: 'app-tierra-formulario',
  templateUrl: './tierra-formulario.component.html',
  styleUrls: ['./tierra-formulario.component.scss']
})
export class TierraFormularioComponent implements OnInit {

  nuevaSolicitud = new Solicitud("2021-12-01",39.4702,-0.37,0.10);
  respuesta!: Respuesta;
  @Output() crearNuevaSolicitud = new EventEmitter<Solicitud>();
  
  constructor() { }

  primerDia:string = "1995-06-16"
  ultimoDia = "2021-12-31"
 
  

  ngOnInit(): void {
    this.btnNuevaSolicitud();
  }

  //Valida que los campos han sido rellendos correctamente
  dibujarBoton() {
    return this.nuevaSolicitud.fecha != null && this.nuevaSolicitud.lat != null && this.nuevaSolicitud.long != null;
  }

  btnNuevaSolicitud() {
    console.log("Nueva solicitud: ");
    console.log(this.nuevaSolicitud)

    if (this.dibujarBoton()) {
      this.crearNuevaSolicitud.emit(this.nuevaSolicitud);

      //this.nuevaSolicitud=new Solicitud('',0,0,0);
    }
    

  }

}
