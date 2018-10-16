import { Component } from '@angular/core';
import { NavController, NavParams, Checkbox } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CheckoutSucessoPage } from '../checkout-sucesso/checkout-sucesso';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  fecharAcordo() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    loader.present();
    loader.onDidDismiss(() => {
      this.navCtrl.setRoot(CheckoutSucessoPage)
    });
  }

}
