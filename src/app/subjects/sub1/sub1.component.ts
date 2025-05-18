import { Component } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-sub1',
  imports: [],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.scss'
})
export class Sub1Component {

  info: any = '';

  constructor(private app: AppService) {
    app.subTopic.subscribe((data) => {
      this.info = data;
    })

  }

  publish() {
    this.app.subTopic.next('How are you?');
  }

}
