import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
    public user: User,public alertCtrl: AlertController) {

      this.touchEnable = false;
     }

  name :string;
  email: string;
  touchEnable : boolean;
  touchEnablePrompt : any;
  touchNotEnablePrompt : any;

  touchLogin() {
     this.touchEnablePrompt = this.alertCtrl.create({
        title: 'Touch Id Login',
        subTitle: 'Use Touch ID instead of your password to sign on.',
        buttons: ['Dismiss']
      });

      this.touchNotEnablePrompt = this.alertCtrl.create({
        title: 'Touch Id Login',
        subTitle: 'Touch ID has not been set up on this device.',

        buttons: [
        {
          text: 'Use Touch ID',
          handler: () => {
            this.touchEnable = true;
          }
        },
        {
          text: 'No thanks',
          role : 'cancel'
        }]
      });
    if( this.touchEnable ) {
      this.touchEnablePrompt.present();
    } else {
      this.touchNotEnablePrompt.present();

    }
  }

  login() {
    this.navCtrl.push('StartGamePage');
  }

  vw() {
    this.navCtrl.push('VWLoginPage');
  }

  createAccount() {
   this.navCtrl.push('SignupPage');
  }

  review() {
    this.user.holdData( this.name, this.email, null);
    this.navCtrl.push('ReviewPage');
  }
}
