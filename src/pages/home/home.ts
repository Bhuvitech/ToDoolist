import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from '../../models/models';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

   const data : Todo ={
     id:1,
     text:"hello",
     isCompleted:false,
    };
  }

}
