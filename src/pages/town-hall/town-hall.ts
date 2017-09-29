import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User, Stocks } from '../../providers/providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage({name: 'town-hall'})
@Component({
  selector: 'page-town-hall-1',
  templateUrl: 'town-hall.html'
})
export class TownHallPage {

  name :string;
  email :string;
  news : any = [];

  constructor(public navCtrl: NavController,public user: User, public stocks : Stocks) {

    let indxs = Object.keys(this.stocks.stocks);
    console.log( indxs)
    for( let i = 0; i < indxs.length; i++ ) {
      let idx = indxs[i];
      this.news.push( [idx, this.getRand()] );
    }

   }

   getRand() {
     return Math.floor(Math.random() * 11) * 1;
   }

  ionViewDidLoad() {
    this.name = this.user._holder.name;
    this.email = this.user._holder.email;
  }

  show(n){
    console.log('show')
    this.user.artical = n;
    this.navCtrl.push('town-hall-2');
  }

  play() {
    this.navCtrl.push('StartGamePage');
  }
}
