import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	paramsParent: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	this.paramsParent = navParams.data;
  }

}
