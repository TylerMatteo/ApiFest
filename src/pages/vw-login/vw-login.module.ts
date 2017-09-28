import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { VWLoginPage } from './vw-login';

@NgModule({
  declarations: [
    VWLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(VWLoginPage),
    TranslateModule.forChild()
  ],
  exports: [
    VWLoginPage
  ]
})
export class VWLoginPageModule { }
