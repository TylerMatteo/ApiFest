import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User, Stocks } from '../../providers/providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage({name: 'town-hall-2'})
@Component({
  selector: 'page-town-hall-12',
  templateUrl: 'article.html'
})
export class ArticlePage {

  link : any = [
    ['Recall Of Some EpiPens Extends To U.S.', 'The pharmaceutical company Mylan NV announced a recall of some brand-name EpiPen and EpiPen Jr. auto-injectors on Friday.'],
    ['Cigna Will Continue to Sell Obamacare in Six States ', 'Signage is displayed in front of Cigna Corp. headquarters in Bloomfield, Connecticut, U.S., on Tuesday, Nov. 22, 2016.  Photo: Michael Nagle/bloomberg Cigna will continue to offer individual coverage in 2018 under the Affordable Care Act on public exchanges in six states, largely maintaining the markets it has been in this year. '],
    [ 'Anthem pulls out of Main\'s ACA exchange ', 'In a sign that that insurers are not placated by the collapse of another Affordable Care Act repeal bill, Anthem has announced that it will pull out of Maine’s individual marketplace. The insurer said it will offer only one off-exchange gold-level plan in three counties in Maine next year. In 2017, it sold on-exchange plans in every county in the state, according to the Kaiser Family Foundation. ']
  ];

  constructor(public navCtrl: NavController,public user: User, public stocks : Stocks) {


   }


}
