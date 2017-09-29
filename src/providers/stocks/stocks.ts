import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/finally";

import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Jsonp } from "@angular/http";

import { Api } from "../api/api";

@Injectable()
export class Stocks {

  stocks : any = {
    "Health" : {
      val : "23.5",
      tickers : [],
      percent : "6.89"
    },
    "Tech" : {
      val : "100",
      tickers : [],
      percent : "10.13"
    },
    "Agraculture" : {
      val : "53.4",
      tickers : [],
      percent : "4.35"
    },
    "Green Energy" : {
      val : "34.6",
      tickers : [],
      percent : "9.83"
    },
    "Oil" : {
      val : "33",
      tickers : [],
      percent : "-5"
    },
    "Social" : {
      val : "89",
      tickers : [],
      percent : "15"
    },
    "Sports" : {
      val : "77.43",
      tickers : [],
      percent : "-1.1"
    },
    "Apparel" : {
      val : "103",
      tickers : [],
      percent : "4"
    },
    "Multimedia" : {
      val : "25.2",
      tickers : [],
      percent : "-.05"
    },
    "Transportation" : {
      val : "10.4",
      tickers : [],
      percent : "-5"
    }
  };

  constructor(public http: Http, public api: Api, private jsonp: Jsonp) {
    this.updateStocks();
  }

  updateStocks() {
    console.log('calling')
    try {
      console.log( this.stocks )
    let indxs = Object.keys(this.stocks);
    for( let i = 0; i < indxs.length; i++ ) {
      setTimeout(() => {
        let idx = indxs[i];
        this.stocks[idx].tickers.push( { val : this.stocks[idx].val, percent : this.stocks[idx].percent} );
         var num = Math.random();
        num = ( num * 100 ) %2 == 0 ? -num : num;
        this.stocks[idx].val = Number( this.stocks[idx].val ) + num;

        //this.stocks[i].percent = ;
     }, Math.floor(Math.random() * 5) + 1000);


    }
  } catch(e) {}

    setTimeout(() => {this.updateStocks()}, 7000);
  }

  refreshStocks() {
    return this.http.get("https://query1.finance.yahoo.com/v10/finance/quoteSummary/ROKU?formatted=true&crumb=ROgfZGG8H/5&lang=en-US&region=US&modules=price,summaryDetail").share();
  }


}
