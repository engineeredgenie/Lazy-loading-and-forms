import { Component } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-sub2',
  imports: [],
  templateUrl: './sub2.component.html',
  styleUrl: './sub2.component.scss'
})
export class Sub2Component {

  constructor(public app: AppService) {

  }

  publish() {
    this.app.subTopic.next('I\'m good');
  }
}
