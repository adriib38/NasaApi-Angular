import { Component, Input, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Respuesta } from 'src/app/models/Respuesta';
import { Solicitud } from 'src/app/models/Solicitud';
import { TierraService } from 'src/app/services/tierra.service';


@Component({
  selector: 'app-tierra-resultado',
  templateUrl: './tierra-resultado.component.html',
  styleUrls: ['./tierra-resultado.component.scss']
})
export class TierraResultadoComponent implements OnInit {

  respuestaLista = false;

  respuesta:Respuesta = {
    date: '',
    id: '',
    url: '',

  }


  constructor(private servicio: TierraService) { }

  ngOnInit(): void {


    let observador: Observer<Respuesta> = {
      next: (respuestaR: Respuesta) => {
        console.log("Foto recivida en componente: "+respuestaR.id)
        this.respuesta = respuestaR;

        this.respuestaLista = true;
      },
      error:  (err: any) =>{ 
        this.respuestaLista = false;
      },
      complete: function () { }
    };


    this.servicio.observable$.subscribe(observador);

  }















  


}
