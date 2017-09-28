import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
  FormsModule,
    IonicPageModule.forChild(SignupPage),
    TranslateModule.forChild()
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }
