import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { User } from '../../providers/providers';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    public user: User) { }

  name :string;
  email: string;

  login() {
    this.navCtrl.push('LoginPage');
  }

  vw() {

  }

  createAccount() {
   this.navCtrl.push('SignupPage');
  }

  review() {
    this.user.holdData( this.name, this.email, null);
    this.navCtrl.push('ReviewPage');
  }
}
