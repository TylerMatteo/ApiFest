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
    }

    ionViewDidLoad() {
       this.stock = this.stocks.stock;
      let cat = this.getCat();
      let data = this.getData();

     this.options = {
        legend : {
          enabled : false
        },
        yAxis : {
          title : ''
        },
        xAxis: {
            categories: cat
        },
        chart : {
          width: 380,
          height: 300,
        },
         title : '',
          series: [{
              name: '',
              data: data,
          }]
        };
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

    options: Object;

}
