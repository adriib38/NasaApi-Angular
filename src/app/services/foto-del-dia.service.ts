import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';
import { Foto } from '../models/foto';

@Injectable()

export class FotoDelDiaService {
  cambiarFecha() {
    throw new Error('Method not implemented.');
  }

  observable$ = new Subject<Foto>();

  constructor(private http: HttpClient) {

  }




  leerFoto(date:string) {
    let url = `https://api.nasa.gov/planetary/apod?api_key=aEruEy1RWLOZfhFvHsV8fNU4f8sYzNqG64TJjXBH${"&date=" + date}`;

    let observador:Observer<Foto> = {

      next: (foto:Foto) => {
        console.log("-----> NEXT")      
        console.log("Foto recivida en servicio: "+foto.title)
        this.observable$.next(foto);
      },
      error: (err: any): void => {
        console.log("-----> ERROR")
        console.log(err);
      },
      complete: () => {
        console.log("-----> COMPLETE")
      }
    };

    this.http.get<Foto>(url).subscribe(observador);


  }

  leerFotoConCallBackManual(date: string, evento:(x:Foto) => void) {
    let url = `https://api.nasa.gov/planetary/apod?api_key=aEruEy1RWLOZfhFvHsV8fNU4f8sYzNqG64TJjXBH${"&date=" + date}`;

    let observador:Observer<Foto> = {

      next: (foto:Foto) => {
        console.log("-----> NEXT")      
        console.log(foto)
      },
      error: (err: any): void => {
        console.log("-----> ERROR")
        console.log(err);
      },
      complete: () => {
        console.log("-----> COMPLETE")
      }
    }

    this.http.get<Foto>(url).subscribe(observador);



  }
}
