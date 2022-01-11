import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan","Perez"), 
        new Persona("Laura","Juarez"),
        new Persona("Emiliano", "Molina")  
      ];
    
    saludar = new EventEmitter<number>();

    constructor(private logginService:LogginService){}

    personaAgregada(persona: Persona){
        this.logginService.sendMessageConsole("agregamos persona: " + persona.nombre + " " + persona.apellido);
        this.personas.push(persona);
    }
}