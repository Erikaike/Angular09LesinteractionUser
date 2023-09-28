import { Component, EventEmitter, Output  } from '@angular/core';
import { kitten } from '../create-kitten/kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent{

  kittenList: Array<kitten> = [];

  //Apres creation d'un nouveau kitten
  onReceiveNewKitten(event: kitten): void {
    this.kittenList.push(event);
  }

  //Apres adoption d'un kitten

  @Output() addAKitten: EventEmitter<kitten> = new EventEmitter();

  adoptTheKitten(selectedKitten: kitten): void {
    this.addAKitten.emit(selectedKitten);
    let newKittenList = this.kittenList.filter(item => item !== selectedKitten);
    this.kittenList = newKittenList;
  }

}
