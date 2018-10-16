import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoPage } from '../pages/produto/produto';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckoutSucessoPage } from '../pages/checkout-sucesso/checkout-sucesso';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProdutoPage,
    CheckoutPage,
    CheckoutSucessoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProdutoPage,
    CheckoutPage,
    CheckoutSucessoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
