import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StockCardPage } from './stock-card';
import { ChartModule }            from 'angular2-highcharts';

@NgModule({
  declarations: [
    StockCardPage,
  ],
  imports: [
    ChartModule,
    IonicPageModule.forChild(StockCardPage),
    TranslateModule.forChild()
  ],
  exports: [
    StockCardPage
  ]
})
export class StockCardPageModule { }
