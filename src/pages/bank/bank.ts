import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers/providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage({name: 'bank'})
@Component({
  selector: 'page-review',
  templateUrl: 'bank.html'
})
export class BankPage {


  constructor(public navCtrl: NavController,public user: User,) {
    this.options = {
        legend : {
          enabled : false
        },
          series: [{
              name: '',
              data: [1,2,3,4],
          }]
        };
    }

    options : any;


}
