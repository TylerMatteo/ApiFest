import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Api } from '../api/api';

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
export class Task {
  _tasks: any;

  constructor(public http: Http, public api: Api) {
    //this._holder = {};
    this._tasks = [
      {id: 0, completed: false, description: 'Complete the stocks course at the school'},
      {id: 1, completed: true, description: 'Buy a stock from 3 different industries'},
      {id: 2, completed: false, description: 'Complete the bonds course at the school'}
    ]
  }

  all() {
    return this._tasks
  }

  complete(id: number) {
    this._tasks.find(task => task.id === id).completed = true;
  }

  incomplete() {
    return this._tasks.filter(task => task.completed === false);
  }

}
