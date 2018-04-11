import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

// nav
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  // parrams
  // params = {
  // 	baseAutolink:,
  // 	dataHomePage:,
  // };
  params: any;

  constructor(private navParams: NavParams) {
  	// this.baseAutoLink = navParams.get('baseAutolink');
  	// this.dataHomePage = navParams.get('data');
  	this.params = {
  		baseAutoLink: navParams.get('baseAutolink'),
  		dataHomePage: navParams.get('data')
  	};
  }
}
