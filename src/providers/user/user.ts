import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Api } from '../api/api';
import { Stocks } from '../stocks/stocks';
import moment from 'moment';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  _holder : any;
  account:any;
  portfolio : any;
  portfolioDiff : number = 0;
  portfolioPoints : any = {};
  artical : any;

  constructor(public http: Http, public api: Api, public stocks: Stocks) {
    this._holder = {};
    this.account = 500.00;
    this.portfolio = 0;
    this.updatePortfolio();
    setTimeout( () => {this.updatePortfolio();}, 5000);
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  updatePortfolio() {
    let
      date = new Date(),
      min = date.getMinutes();

    let data = [];
    let idxs = Object.keys( this.stocks.stocks );
    for( let idx in idxs ) {
      if( this.stocks.stocks[idxs[idx]].numOwned > 0)
        data.push(this.stocks.stocks[ idxs[idx] ]);
    }
    data = data.map( (stock) => stock.numOwned * stock.val );
    this.portfolio = 0;

    data.forEach( (d) => {
      this.portfolio += d;
    });
    //if( !this.portfolioPoints[min] ) {
      this.portfolioPoints[min] = { time : moment( date ).format('h:mm a'), val : this.portfolio };

   // }

    var prev = moment(date).subtract(1, "minutes").format('mm');

    try {
      var orig = this.portfolioPoints[prev].val;
      orig = Number(orig);
      var val = this.portfolioPoints[min].val;
      val = Number(val);
      // if( orig > val ) {
      //   let dec = orig - val;
      //   this.portfolioDiff = -(dec/orig* 100);
      // } else {
      //   let inc = val - orig;
      //   this.portfolioDiff =(inc/orig*100);
      //   this.portfolioDiff = Number( this.portfolioDiff );
      //   this.portfolioDiff = parseFloat(this.portfolioDiff + '').toFixed(2) as any;
      // }
    } catch(e) {}
    setTimeout( () => {this.updatePortfolio();}, 5000);
  }

  loginWithVW(accountInfo: any) {

    let seq = this.api.post('Security/v2.0.0/login', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  holdData( name: string, email: string, goal : string ) {
    this._holder.name = name;
    this._holder.email = email;
    this._holder.goal = goal;

  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
