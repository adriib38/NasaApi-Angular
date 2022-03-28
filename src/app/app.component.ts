import { Component, ɵallowSanitizationBypassAndThrow } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa';

  componente:string = 'foto';
  
  estaSeleccionado(nombre:string){ //Recive un texto, si consigue con el almacenado es feliz
    return this.componente === nombre;
  }

  ponerSeleccionado(nombre:string){
    this.componente=nombre;
  }

}
