import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mySubmit(event): number {
  	// console.log(event)
  	// console.log(list.value);
  	var input = document.getElementsByTagName("input")[0].value;
  	if (input.length == 0)
  		return 0;
  	else
  		this.testConnection();
  }

  testConnection() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }

}
