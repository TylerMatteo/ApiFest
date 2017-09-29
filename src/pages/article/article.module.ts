import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArticlePage } from './article';

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlePage),
    TranslateModule.forChild()
  ],
  exports: [
    ArticlePage
  ]
})
export class ArticlePageModule { }
