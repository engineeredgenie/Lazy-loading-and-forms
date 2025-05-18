import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {AppService} from '../app.service';

@Component({
  selector: 'app-signals',
  imports: [
    NgForOf,
    CartComponent
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  cart: string[] = [];
  products: string[] = ['phone', 'shirts', 'jeans'];

  constructor(private appService: AppService) {
  }

  addToCart(product: string) {
    this.cart.push(product);
    console.log(this.cart)
    this.appService.updateCartCount(this.cart.length)
  }
}
