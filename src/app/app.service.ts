import {effect, Injectable, signal} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cartSignal = signal(0);
  subTopic = new Subject();
  bSubTopic = new BehaviorSubject('I\'m John');

  constructor() {
  }

  updateCartCount(count: number) {
    this.cartSignal.set(count);
    console.log('Updating', this.cartSignal())
  }

}
