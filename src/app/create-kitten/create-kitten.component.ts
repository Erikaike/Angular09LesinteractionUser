import { Component,  EventEmitter, Output } from '@angular/core';
import { kitten } from './kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  //initialisation
  defaultKitten: kitten = new kitten('', '', '../../....', '');

  //Envoi de la nouvelle entrée au Cposant parent list-kitten-component
  @Output() sendNewKittenToParent: EventEmitter<kitten> = new EventEmitter();

  
  createKitten(): void {
    this.sendNewKittenToParent.emit(this.defaultKitten);

    //réinitialisation des données apres leur envoi
    this.defaultKitten = {
    name: '',
     race: '',
     date:'',
     picLink: ''
    }
  }
}
