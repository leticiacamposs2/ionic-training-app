import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewPostPage } from '../new-post/new-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
