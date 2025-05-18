import { Component } from '@angular/core';
import {Sub1Component} from './sub1/sub1.component';
import {Sub2Component} from './sub2/sub2.component';
import {Sub3Component} from './sub3/sub3.component';

@Component({
  selector: 'app-subjects',
  imports: [
    Sub1Component,
    Sub2Component,
    Sub3Component
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {

}
