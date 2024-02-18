import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  red = new BehaviorSubject(0);
  blue = new BehaviorSubject(0);
  constructor() {}

  reset() {
    this.red.next(0);
    this.blue.next(0);
  }

  bluePlus() {
    this.blue.next(this.blue.value + 1);
  }

  blueMinus() {
    if (this.blue.value > 0) {
      this.blue.next(this.blue.value - 1);
    }
  }

  redPlus() {
    this.red.next(this.red.value + 1);
  }

  redMinus() {
    if (this.red.value > 0) {
      this.red.next(this.red.value - 1);
    }
  }
}
