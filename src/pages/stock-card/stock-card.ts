import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { User,Stocks } from '../../providers/providers';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-stock-card',
  templateUrl: 'stock-card.html'
})
export class StockCardPage {
  stock: any;

  constructor(public navCtrl: NavController,
    public user: User,public alertCtrl: AlertController, public stocks: Stocks) {
      this.stock = this.stocks.stock;
      this.moment = moment;
    }

    ionViewDidLoad() {
       this.stock = this.stocks.stock;
       this.options = {
        legend : {
          enabled : false
        },
        yAxis : {
          title : ''
        },
        xAxis: {
            categories: this.getCat()
        },
        chart : {
          width: 380,
          height: 300,
        },
         title : '',
          series: [{
              name: '',
              data: this.getData(),
          }]
        };
    }

    options : any;
    moment:any;

    buy() {

      let val = this.stock.val;
      val = parseFloat(this.stock.val ).toFixed(2);
      this.user.account = this.user.account - val as any;
      this.stock.numOwned++;
      this.user.account = parseFloat(this.user.account ).toFixed(2);
      this.stocks.transactions.push( { val : val, account : this.user.account, time : new Date().getTime(), type : 'b', name : this.stock.name });
       const prompt = this.alertCtrl.create({
        title: `Buying ${this.stock.name} Stock`,
        subTitle: `You just bought some ${this.stock.name} Stock for $${val}. Your account balance is $${this.user.account}`,
        buttons: ['Dismiss']
      });
       prompt.present();
       this.user.updatePortfolio();
    }

    sell() {
      if( this.stock.numOwned > 0 )
       this.stock.numOwned--;
      let val = this.stock.val;
      val = parseFloat(this.stock.val ).toFixed(2);
      this.user.account = Number( this.user.account);
      this.user.account = Number(this.user.account) + Number(val);
      this.stocks.transactions.push( { val : val, account : this.user.account, time : new Date().getTime(), type : 's', name : this.stock.name });

      this.user.account = parseFloat(this.user.account ).toFixed(2);
       const prompt = this.alertCtrl.create({
        title: `Selling ${this.stock.name} Stock`,
        subTitle: `You just sold some ${this.stock.name} Stock for $${val}. Your account balance is $${this.user.account}`,
        buttons: ['Dismiss']
      });
       prompt.present();
       this.user.updatePortfolio();
    }

    getCat() {
      let data = this.stock.tickers.map( (tick) => {
        return [tick.time,tick.val];
      });
      let byMin = {};
      data.forEach( ( data ) => {
        const min = new Date( data[0]).getMinutes();
        byMin[min] = byMin[min] || []; // make sure array
        byMin[min].push( data );
      });
      let ret = [];
      for(let key in byMin) {
        byMin[key].sort(function(a, b) {
          return b - a;
        });
        ret.push( moment( byMin[key][0][0] ).format('h:mm') );
      }
      return ret;
    }

    getData() {
      let data = this.stock.tickers.map( (tick) => {
        return [tick.time,tick.val];
      });
      let byMin = {};
      data.forEach( ( data ) => {
        const min = new Date( data[0]).getMinutes();
        byMin[min] = byMin[min] || []; // make sure array
        byMin[min].push( data );
      });
      let ret = [];
      for(let key in byMin) {
        byMin[key].sort(function(a, b) {
          return b - a;
        });
        ret.push( [ moment(byMin[key][0][0]).format('h:mm'), byMin[key][0][1] ]);
      }
      return ret;
    }

}
