import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	url = "https://e-report.herokuapp.com/";

	constructor(public navCtrl: NavController,private inappBrowser: InAppBrowser, platform: Platform) {}

	showContent() {
		const options: InAppBrowserOptions = {
			zoom: 'no'
		}
		const browser = this.inappBrowser.create(this.url,'_self', options);
	}

}
