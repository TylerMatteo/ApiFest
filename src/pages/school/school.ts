import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'school.html'
})
export class SchoolPage {

  constructor(public navCtrl: NavController) { }

  play() {
    this.navCtrl.push('StartGamePage');
  }
}
