import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StartGamePage } from './start-game';

@NgModule({
  declarations: [
    StartGamePage,
  ],
  imports: [
    IonicPageModule.forChild(StartGamePage),
    TranslateModule.forChild()
  ],
  exports: [
    StartGamePage
  ]
})
export class StartGamePageModule { }
