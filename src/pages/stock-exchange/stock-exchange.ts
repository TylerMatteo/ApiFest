import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Stocks } from '../../providers/providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-stock-exchange',
  templateUrl: 'stock-exchange.html'
})
export class StockExchangePage {

  stockData : any;
  indxs: any;
  constructor(public navCtrl: NavController, public stocks: Stocks) {
    this.stockData = this.stocks.stocks;
    this.indxs = Object.keys(this.stockData);
    console.log('Data', this.stockData, this.indxs)
     // this.stocks.getStocks().then(( data) => {
     //    this.stockData = data;
     //  });
  }

  openCard( stock) {
    this.stocks.stock = stock;
    this.navCtrl.push('StockCardPage');
  }


  play() {
    this.navCtrl.push('StartGamePage');
  }
}
