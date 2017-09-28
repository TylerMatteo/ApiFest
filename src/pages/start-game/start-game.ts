import { Component } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
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
  width:number;
  height:number;
  recs:any[];
  roadY:number[];
  roadX:number[];
  visibleState:string;

  constructor(public navCtrl: NavController) {
    this.width = 3300;
    this.height = 3000;
    this.roadY = [505];
    this.roadX = [707];
    this.visibleState = 'normal';
  }

  showSchool() {
    this.visibleState = 'right';
    setTimeout(() => {
      this.visibleState = 'normal';
    }, 200);

    setTimeout(() => {
      this.visibleState = 'left';
    }, 400);

    setTimeout(() => {
      this.visibleState = 'normal';
    }, 500);
    //this.navCtrl.push('SchoolPage');
    //this.navCtrl.push('StockExchangePage');
    //this.navCtrl.push('BankPage');
   // this.navCtrl.push('TownHallPage');

  }
  ionViewDidLoad() {
    const draw = SVG('drawing').size(this.width, this.height).viewbox(0,0,this.width,this.height).rotate(-45).scale(1, .7);
    for( let x = 0; x < this.width; x+=101 ) {
      for( let y = 0; y < this.height; y+=101 ) {
        draw.rect(100, 100).move(x, y).attr({ fill: '#99CC33' });
      }
    }

    for( const key in this.roadY ) {
      for( let y = 0; y < this.height; y+=101 ) {
        draw.image('../assets/img/roadY.png').size(100, 100).move(this.roadY[key], y);
      }
    }

    for( const key in this.roadX ) {
      for( let x = 0; x < this.width; x+=101 ) {
        draw.image('../assets/img/roadX.png').size(100, 100).move(x,this.roadX[key]);
      }
    }
  }
}
