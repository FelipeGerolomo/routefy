import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CheckoutSucessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-sucesso',
  templateUrl: 'checkout-sucesso.html',
})
export class CheckoutSucessoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutSucessoPage');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }

}
