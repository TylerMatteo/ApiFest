import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/finally";

import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Jsonp } from "@angular/http";

import { Api } from "../api/api";

@Injectable()
export class Stocks {

  stocks : any = {
     Health : {
       val : 23.5,
       tickers : [],
       percent : 6.89
     },
     Tech : {
       val : 100,
       tickers : [],
       percent : 10.13
     },
     Agraculture : {
       val : 53.4,
       tickers : [],
       percent : 4.35
     },
     "Green Energy" : {
       val : 34.6,
       tickers : [],
       percent : 9.83
     },
     Oil : {
       val : 33,
       tickers : [],
       percent : -5
     },
     Social : {
       val : 89,
       tickers : [],
       percent : 15
     },
     Sports : {
       val : 77.43,
       tickers : [],
       percent : -1.1
     },
     Apparel : {
       val : 103,
       tickers : [],
       percent : 4
     },
     Multimedia : {
       val : 25.2,
       tickers : [],
       percent : -.05
     },
     Transportation : {
       val : 10.4,
       tickers : [],
       percent : -5
     }
  };
  stock : any;
  constructor(public http: Http, public api: Api, private jsonp: Jsonp) {
    let indxs = Object.keys(this.stocks);
    for( let i = 0; i < indxs.length; i++ ) {
      let idx = indxs[i];
      this.stocks[idx].val = Number( this.stocks[idx].val );
      this.stocks[idx].originalVal = this.stocks[idx].val;
      this.stocks[idx].percent = Number( this.stocks[idx].percent );
      this.stocks[idx].negs = 0;
      this.stocks[idx].name = idx;
    }
    this.updateStocks();
  }

  updateStocks() {
   // console.log('calling')
    try {
    let indxs = Object.keys(this.stocks);
    for( let i = 0; i < indxs.length; i++ ) {
      let rand = Math.floor(Math.random() * 5) * 1000;
      setTimeout(() => {
        let idx = indxs[i];
        this.stocks[idx].tickers.push( { val : this.stocks[idx].val, percent : this.stocks[idx].percent} );
        var num = Math.random() ;
        num = Math.floor( num * 100 ) %2 == 0 ? -num : num;

        if( num > 0 )
          this.stocks[idx].negs++;

        if( this.stocks[idx].negs == 3 ) {
          this.stocks[idx].negs = 0;
          num = Math.abs( num ) + 2;
        }

        this.stocks[idx].val = Number( this.stocks[idx].val ) + num;

        this.stocks[idx].val = Number( this.stocks[idx].val )
        let orig = Number( this.stocks[idx].originalVal );
        let val = Number( this.stocks[idx].val );
        if( orig > val ) {
          let dec = orig - val;
          this.stocks[idx].percent = -(dec/orig* 100);
        } else {
          let inc = val - orig;
          this.stocks[idx].percent =(inc/orig*100);
        }
          //down
          // console.log( 'down')
          // let t = orig / val as any;
          // if( typeof t === 'string')
          //   t = Number( t );
          //   t = parseFloat( t ).toFixed(2);

          //  this.stocks[idx].percent = this.stocks[idx].percent - t;
        // } else {
        //   //up
        //   console.log( 'up')
        //   let t = val / orig  as any;
        //   if( typeof t === 'string')
        //     t = Number( t );
        //     t = parseFloat( t ).toFixed(2);

        //    this.stocks[idx].percent = this.stocks[idx].percent + t;

        //   //this.stocks[idx].percent = this.stocks[idx].percent + parseFloat(this.stocks[idx].val/this.stocks[idx].originalVal).toFixed(2);

      // }
        //console.log( this.stocks[idx].percent )
        this.stocks[idx].percent = parseFloat( this.stocks[idx].percent).toFixed(2);
     }, rand);


    }
  } catch(e) {}

    setTimeout(() => {this.updateStocks()}, 2000);
  }

  refreshStocks() {
    return this.http.get("https://query1.finance.yahoo.com/v10/finance/quoteSummary/ROKU?formatted=true&crumb=ROgfZGG8H/5&lang=en-US&region=US&modules=price,summaryDetail").share();
  }


}
