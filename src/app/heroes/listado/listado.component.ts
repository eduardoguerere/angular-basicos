import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','SUperman','Batman','Robin']
  heroeBorrado: any = '';
  
  borrarHeroe(){
    console.log('borrando heroe');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
