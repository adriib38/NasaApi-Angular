import { Component, OnInit } from '@angular/core';

import { Observer } from 'rxjs';
import { Foto } from 'src/app/models/foto';
import { FotoDelDiaService } from 'src/app/services/foto-del-dia.service';

@Component({
  selector: 'app-foto-del-dia',
  templateUrl: './foto-del-dia.component.html',
  styleUrls: ['./foto-del-dia.component.scss']
})
export class FotoDelDiaComponent implements OnInit {

  foto: Foto={
    date: '',
    title: '',
    explanation: '',
    url: '',
    hdurl: '',
    media_type: ''
  };

  primerDia:string = "1995-06-16"
  hoy = new Date().toISOString().split('T')[0]

 

  constructor(private servicio: FotoDelDiaService) { }

  ngOnInit(): void {

    console.log("HOY:::::::::::::: "+this.hoy);

    let observador: Observer<Foto> = {
      next: (foto: Foto) => {
        console.log("Foto recivida en componente: "+foto.title)
        this.foto = foto;
      },
      error: function (err: any) { },
      complete: function () { }
    };


    this.servicio.observable$.subscribe(observador);
    this.servicio.leerFoto(this.hoy);
  }


  cambiarFecha(evento:any) {
    console.log("Input nuevo fecha: " + evento.target.value)
    this.servicio.leerFoto(evento.target.value);
    

  }

}
