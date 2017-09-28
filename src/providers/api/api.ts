import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string;

  constructor(public http: Http) {
    this.url = "https://nginx0.pncapix.com";
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    if( endpoint.indexOf('http') == -1) {
      endpoint = this.url + '/' + endpoint
    }
    return this.http.get(endpoint, options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Accept', 'application/xml')
    headers.append('Authorization', 'Bearer ced5e414-72b2-306a-aa99-0acc372b9fd4');

    options = options ? options : new RequestOptions({headers: headers});
    console.log(options);
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
