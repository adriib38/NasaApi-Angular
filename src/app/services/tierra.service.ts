import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';
import { Respuesta } from '../models/Respuesta';
import { Solicitud } from '../models/Solicitud';

@Injectable()

export class TierraService {

  observable$ = new Subject<Respuesta>();
  
  constructor(private http: HttpClient) { }
  

  leerRespuesta(solicitud:Solicitud) {
    //https://api.nasa.gov/planetary/earth/assets?lon=-0.37&lat=39.4702&date=2021-05-01&&dim=0.10&api_key=aEruEy1RWLOZfhFvHsV8fNU4f8sYzNqG64TJjXBH
    let url = `https://api.nasa.gov/planetary/earth/assets?lon=${solicitud.long}&lat=${solicitud.lat}&date=${solicitud.fecha}&&dim=${solicitud.dim}&api_key=aEruEy1RWLOZfhFvHsV8fNU4f8sYzNqG64TJjXBH`;
    console.log("-----> Solicitando")
    console.log(url)

    let observador:Observer<Respuesta> = {

      next: (respuesta:Respuesta) => {
        console.log("-----> NEXT")      
        console.log("Foto recivida en servicio: "+respuesta.id)
        this.observable$.next(respuesta);
      },
      error: (err: any): void => {
        console.log("-----> ERROR")
        console.log(err);
      },
      complete: () => {
        console.log("-----> COMPLETE")
      }
    };

    this.http.get<Respuesta>(url).subscribe(observador);

  }

}
