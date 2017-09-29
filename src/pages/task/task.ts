import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../providers/task/task';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'tasks'
})
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  tasks: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public task: Task) {
      this.tasks =  task.all();
  }


  ionViewDidLoad() {
    console.log(this.tasks);
  }

}
