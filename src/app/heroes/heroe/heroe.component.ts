import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;

    get nombreCapitalizdo(){
       return this.nombre.toUpperCase();
    }

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }
}