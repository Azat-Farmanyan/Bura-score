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

  bluePlus(double: boolean = false) {
    double
      ? this.blue.next(this.blue.value + 2)
      : this.blue.next(this.blue.value + 1);
  }

  blueMinus(double: boolean = false) {
    if (double) {
      this.blue.value >= 2
        ? this.blue.next(this.blue.value - 2)
        : this.blue.next(this.blue.value - 1);
    } else {
      this.blue.next(this.blue.value - 1);
    }
  }

  redPlus(double: boolean = false) {
    double
      ? this.red.next(this.red.value + 2)
      : this.red.next(this.red.value + 1);
  }

  redMinus(double: boolean = false) {
    if (double) {
      this.red.value >= 2
        ? this.red.next(this.red.value - 2)
        : this.red.next(this.red.value - 1);
    } else {
      this.red.next(this.red.value - 1);
    }
  }
}
