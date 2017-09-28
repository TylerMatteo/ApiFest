import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StockExchangePage } from './stock-exchange';

@NgModule({
  declarations: [
    StockExchangePage,
  ],
  imports: [
    IonicPageModule.forChild(StockExchangePage),
    TranslateModule.forChild()
  ],
  exports: [
    StockExchangePage
  ]
})
export class StockExchangePageModule { }
