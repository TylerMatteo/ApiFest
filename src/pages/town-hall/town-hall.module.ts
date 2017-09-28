import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TownHallPage } from './town-hall';

@NgModule({
  declarations: [
    TownHallPage,
  ],
  imports: [
    IonicPageModule.forChild(TownHallPage),
    TranslateModule.forChild()
  ],
  exports: [
    TownHallPage
  ]
})
export class TownHallPageModule { }
