import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BankPage } from './bank';
import { ChartModule }            from 'angular2-highcharts';

@NgModule({
  declarations: [
    BankPage,
  ],
  imports: [
  ChartModule,
    IonicPageModule.forChild(BankPage),
    TranslateModule.forChild()
  ],
  exports: [
    BankPage
  ]
})
export class BankPageModule { }
