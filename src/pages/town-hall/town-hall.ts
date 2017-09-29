import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers/providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage({name: 'town-hall'})
@Component({
  selector: 'page-town-hall',
  templateUrl: 'town-hall.html'
})
export class TownHallPage {

  name :string;
  email :string;

  constructor(public navCtrl: NavController,public user: User,) { }

  ionViewDidLoad() {
    this.name = this.user._holder.name;
    this.email = this.user._holder.email;
  }

  play() {
    this.navCtrl.push('StartGamePage');
  }
}
