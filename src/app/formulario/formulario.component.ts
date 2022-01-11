import { Component } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string = "";
  apellidoInput:string = "";

  constructor(private logginService: LogginService, private personasService: PersonasService){
    this.personasService.saludar.subscribe((indice: number)=> alert("El indice es: " + indice));
  }
  
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.logginService.sendMessageConsole("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
  }
}
