import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/finally";

import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import { Api } from "../api/api";

@Injectable()
export class Stocks {

  transactions : any = [];

  stocks : any = {
     Health : {
       val : 23.5,
       tickers : [],
       percent : 6.89,
       'content' : '<b>ABOUT:</b> The healthcare sector has two main industry groups:<br><ul>'+
          '<li>Companies who manufacture healthcare equipment and supplies or provide healthcare related services. See more: This includes distributors of healthcare products, providers of basic healthcare services, and owners and operators of healthcare facilities and organizations.</li>'+
          '<li>Companies primarily involved in the research, development, production and marketing of pharmaceuticals and biotechnology products.</li></ul>'+
           '<b>EXAMPLES:</b><br><ul>'+
            '<li>Pfizer (PFE) Biotechnology and Pharmaceutical Industry</li>'+
            '<li>Merck (MRK) Pharmaceutical</li>'
     },
     Tech : {
       val : 100,
       tickers : [],
       percent : 10.13,
       content : '<b>ABOUT:</b> The information technology sector covers the following general areas:<br>'+
        '<ul><li>Technology software & services See More: This includes companies that primarily develop software in various fields such as the internet, applications, systems, databases management and/or home entertainment, and companies that provide information technology consulting and services, as well as data processing and outsourced services </li>'+
        '<li>Technology hardware & equipment See More: This includes manufacturers and distributors of communications equipment, computers & peripherals, electronic equipment and related instruments</li>'+
        '<li>Semiconductors & semiconductor equipment manufacturers.</li></ul>' +
        '<b>EXAMPLES:</b><ul>' +
        '<li>APPLE (APPL) Electronics </li>' +
        '<li>Symantec Corporation (SYMC) Cyber Secrutiy </li>'+
        '<li>USA Technologies Inc (USAT) Software</li><ul>'

     },
     Agraculture : {
       val : 53.4,
       tickers : [],
       percent : 4.35
     },
     "Green Energy" : {
       val : 34.6,
       tickers : [],
       percent : 9.83,
       content : '<b>ABOUT:</b> The energy sector comprises companies dominated by either of the following activities: <br>'+
        '<ul><li>The construction or provision of oil rigs, drilling equipment and other energy related service and equipment.</li>'+
        '<li>Companies engaged in the exploration, production, marketing, refining and/or transportation of oil and gas products.</li></ul>'+
        '<b>EXAMPLES:</b><ul>'+
        '<li>Tidewater Inc (TDW) Energy Equipment & Services</li>'+
        '<li>Tetra Technologies INC (TTI)  Energy Equipment & Services</li>'+
        '<li>Delek US Holdings Inc (DK) Oil, Gas & Consumable Fuels</li>'

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
  constructor(public http: Http, public api: Api) {
    let indxs = Object.keys(this.stocks);
    for( let i = 0; i < indxs.length; i++ ) {
      let idx = indxs[i];
      this.stocks[idx].val = Number( this.stocks[idx].val );
      this.stocks[idx].originalVal = this.stocks[idx].val;
      this.stocks[idx].percent = Number( this.stocks[idx].percent );
      this.stocks[idx].negs = 0;
      this.stocks[idx].name = idx;
      this.stocks[idx].numOwned = 0;
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
        this.stocks[idx].tickers.push( { time : new Date().getTime(), val : this.stocks[idx].val, percent : this.stocks[idx].percent} );
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
