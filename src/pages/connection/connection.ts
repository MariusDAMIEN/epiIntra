import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// handler
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

// pages
import { TabsPage } from '../tabs/tabs';

import { AlertController } from 'ionic-angular';

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
    // dataStatus: any;
    dataData: any;
    // dataHeaders: any;
    errorConnection: number = 0;
    baseAutoLink: string;
    // myBool: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP,
      private platform: Platform, private httpBrowser: HttpClient,
      private alertCtrl: AlertController) {
  }

  mySubmit(event): number {
    var inputText = document.getElementsByTagName("input")[0].value;
  	if (inputText.length == 0)
  		return 0;
  	else {
  		this.testConnection(inputText);
        // if (this.errorConnection == 404 || this.errorConnection == -1)
        //   this.messageError();
        // else
        //   this.nextPage(inputText);
    }
  }

  testConnection(inputText: string) {
      this.baseAutoLink = inputText;
      if (this.platform.is('cordova')) {
        this.http.get(inputText + '/?format=json', {}, {})
            .then(data => {
                // console.log(data.status);
                // this.dataStatus = data.status;
                // this.dataHeaders = data.headers;
                this.dataData = JSON.parse(data.data);
                this.nextPage();
            })
            .catch(error => {
                this.errorConnection = error.status;
                this.messageError();
                // console.log(error.status);
                // console.log(error.error); // error message as string
                // console.log(error.headers);
            });
      } else {
        console.log("I am in browser");
        this.httpBrowser.get(inputText + '/?format=json')
          .subscribe(data => {
              this.dataData = data;
              this.nextPage();
        }, error => {
            this.errorConnection = error.status;
            this.messageError();
        });
      }
  }

  messageError() {
    let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Error with your autologin link please chech in intra at this link \"https://intra.epitech.eu/admin/autolog\"\
        or in home page click in \"ticket\" then \"generate aulogin link\"',
        buttons: ['okok']
    });
    alert.present();
  }

  nextPage() {
      this.navCtrl.push(TabsPage, {
          baseAutoLink: this.baseAutoLink,
          data: this.dataData,
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }

}
