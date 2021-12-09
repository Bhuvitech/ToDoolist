import { Component } from '@angular/core';

/**
 * Generated class for the DoneListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'done-list',
  templateUrl: 'done-list.html'
})
export class DoneListComponent {



  constructor() {
  }
    delete(){
console.log("done");
    }
    correct(){
      console.log("undone");
    }

  }


