import { Component } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public appService: AppService) {
  }
}
