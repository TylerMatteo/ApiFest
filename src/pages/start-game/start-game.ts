import { Component } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Task } from '../../providers/task/task';
import SVG from 'svg.js';

@IonicPage()
@Component({
  selector: 'start-game',
  templateUrl: 'start-game.html',
   animations: [
    trigger('myvisibility', [
      state('normal', style({
        '-webkit-transform': 'rotate(0deg)'
      })),
      state('right', style({
        '-webkit-transform': 'rotate(7deg)'
      })),
      state('left', style({
        '-webkit-transform': 'rotate(-7deg)'
      })),
      transition('* => *', animate('.08s'))
    ])
  ]
})
export class StartGamePage {
  taskCount:number;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public task: Task) {
    this.taskCount = task.incomplete().length;
  }

  goToTasks() {
    this.navCtrl.push('tasks');
  }

  ionViewDidLoad() {

    let alert = this.alertCtrl.create({
      title: 'Welcome to Nottingham!',
      message: "In this game, you'll learn about the basics of stocks through lessons. Then, through our stocks simulator, you can apply what you've learned and see what it's like to trade stocks. To get started, click the tasks button in the upper right hand corner of your screen.",
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
