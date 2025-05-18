import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit {
  timer!: Observable<number>;
  counter!: number;
  x!: number;

  ngOnInit() {
    this.timer = new Observable((observer) => {
      let maxCount = 10;
      let minCount = 0;

      this.counter = maxCount;

      let int = setInterval(() => {
        if (this.counter === 0) {
          clearInterval(int)
        } else {
          observer.next(--this.counter) // publishing --this.counter this.counter--
        }
      }, 1000)
    });


    this.timer.subscribe((count: number) => {
      this.x = count;
    })
  }

}
