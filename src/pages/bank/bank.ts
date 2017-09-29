import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User, Stocks } from '../../providers/providers';

import moment from 'moment';
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


  constructor(public navCtrl: NavController,public user: User, public stocks: Stocks) {

    this.updateData();
    this.data = this.getData();
    this.options = {
        legend : {
          enabled : false
        },yAxis : {
          title : ''
        },
        xAxis: {
            categories: this.cats
        },
        chart : {
          width: 380,
          height: 300,
        },
         title : '',
          series: [{
              name: '',
              data: this.data,
          }]
        };
    }
    data :any;
    cats:any;

    updateData() {
      this.data = this.getData();
      this.cats = this.getCat();
      console.log(this.data, this.cats)
      setTimeout( () => {
        this.updateData();
      }, 5000 );
    }

    format(time ){
      return moment(time).format('L')
    }

    getCat() {
       var indxs = Object.keys( this.user.portfolioPoints );
      var data = [];
      for(let idx in indxs ) {
        data.push(this.user.portfolioPoints[  indxs[idx] ]);
      }
      return data.map( (d) => d.time );
    }

    getData() {
      var indxs = Object.keys( this.user.portfolioPoints );
      var data = [];
      for(let idx in indxs ) {
        data.push(this.user.portfolioPoints[  indxs[idx] ]);
      }
      return data.map( (d) => [d.time,d.val] );
    }

    options : any;


}
