import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReviewPage } from './review';

@NgModule({
  declarations: [
    ReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReviewPage
  ]
})
export class ReviewPageModule { }
