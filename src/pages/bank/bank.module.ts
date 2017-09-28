import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BankPage } from './bank';

@NgModule({
  declarations: [
    BankPage,
  ],
  imports: [
    IonicPageModule.forChild(BankPage),
    TranslateModule.forChild()
  ],
  exports: [
    BankPage
  ]
})
export class BankPageModule { }
