import { Component } from '@angular/core';
import { kitten } from '../create-kitten/kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {

  myKitten: Array<kitten> = [];

  onAdoptKitten(event: kitten): void {
    this.myKitten.push(event);
  }
}
