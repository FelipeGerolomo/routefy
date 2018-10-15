import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  produtos: any;
  constructor(public navCtrl: NavController) {
    this.produtos = [
      { id: 1, produto: 'iPhone X', preco: 'R$ 3.000,00', img: 'assets/imgs/p2.jpg' },
      { id: 2, produto: 'Nitendo Switch', preco: 'R$ 2.000,00', img: 'assets/imgs/p1.jpg' },
      { id: 1, produto: 'iPhone X', preco: 'R$ 3.000,00', img: 'assets/imgs/p2.jpg' },
      { id: 2, produto: 'Nitendo Switch', preco: 'R$ 2.000,00', img: 'assets/imgs/p1.jpg' },
      { id: 1, produto: 'iPhone X', preco: 'R$ 3.000,00', img: 'assets/imgs/p2.jpg' },
      { id: 2, produto: 'Nitendo Switch', preco: 'R$ 2.000,00', img: 'assets/imgs/p1.jpg' },
      { id: 1, produto: 'iPhone X', preco: 'R$ 3.000,00', img: 'assets/imgs/p2.jpg' },
      { id: 2, produto: 'Nitendo Switch', preco: 'R$ 2.000,00', img: 'assets/imgs/p1.jpg' },
      { id: 1, produto: 'iPhone X', preco: 'R$ 3.000,00', img: 'assets/imgs/p2.jpg' },
      { id: 2, produto: 'Nitendo Switch', preco: 'R$ 2.000,00', img: 'assets/imgs/p1.jpg' },
    ]
  }

  goToProduto(id) {
    this.navCtrl.push(ProdutoPage)
  }

}
