import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SchoolPage } from './school';

@NgModule({
  declarations: [
    SchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolPage),
    TranslateModule.forChild()
  ],
  exports: [
    SchoolPage
  ]
})
export class SchoolPageModule { }
