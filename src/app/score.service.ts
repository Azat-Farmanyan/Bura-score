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
    if (this.blue.value < 10) {
      const audio = new Audio('../assets/sounds/add.mp3');
      audio.play();
    }
    double
      ? this.blue.next(this.blue.value + 2)
      : this.blue.next(this.blue.value + 1);
  }

  blueMinus(double: boolean = false) {
    const audio = new Audio('../assets/sounds/remove.mp3');
    audio.play();
    if (double) {
      this.blue.value >= 2
        ? this.blue.next(this.blue.value - 2)
        : this.blue.next(this.blue.value - 1);
    } else {
      this.blue.next(this.blue.value - 1);
    }
    if (this.blue.value < 0) this.blue.next(0);
  }

  redPlus(double: boolean = false) {
    if (this.red.value < 10) {
      const audio = new Audio('../assets/sounds/add.mp3');
      audio.play();
    }
    double
      ? this.red.next(this.red.value + 2)
      : this.red.next(this.red.value + 1);
  }

  redMinus(double: boolean = false) {
    const audio = new Audio('../assets/sounds/remove.mp3');
    audio.play();
    if (double) {
      this.red.value >= 2
        ? this.red.next(this.red.value - 2)
        : this.red.next(this.red.value - 1);
    } else {
      this.red.next(this.red.value - 1);
    }
    if (this.red.value < 0) this.red.next(0);
  }
}
