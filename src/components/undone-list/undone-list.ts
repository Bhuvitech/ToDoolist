import { Component } from '@angular/core';

/**
 * Generated class for the UndoneListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'undone-list',
  templateUrl: 'undone-list.html'
})
export class UndoneListComponent {

  text: string;

  constructor() {
    console.log('Hello UndoneListComponent Component');
    this.text = 'Hello World';
  }

}
