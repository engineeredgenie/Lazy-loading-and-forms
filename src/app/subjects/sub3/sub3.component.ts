import { Component } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-sub3',
  imports: [],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.scss'
})
export class Sub3Component {
  info: string = '';
  bInfo: string = '';

  constructor(public app: AppService) {
    app.subTopic.subscribe((topic: any) => this.info = topic)

    setTimeout(() => {
      console.log('triggered')
      app.bSubTopic.subscribe((topic: any) => {
        console.log(topic)
        this.bInfo = topic

      })
    }, 5000)
  }
}
