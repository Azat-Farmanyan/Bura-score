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
    if (this.blue.value > 0 || this.red.value > 0) {
      const audio = new Audio('../assets/sounds/coin-up.mp3');
      audio.play();
    }
    this.red.next(0);
    this.blue.next(0);
  }

  bluePlus(double: boolean = false, triple: boolean = false) {
    if (this.blue.value < 10) {
      this.blueSound();
    }
    if (double) {
      this.blue.next(this.blue.value + 2);
    } else if (triple) {
      this.blue.next(this.blue.value + 3);
    } else this.blue.next(this.blue.value + 1);
  }

  blueMinus(double: boolean = false) {
    this.blueSound();
    if (double) {
      this.blue.value >= 2
        ? this.blue.next(this.blue.value - 2)
        : this.blue.next(this.blue.value - 1);
    } else {
      this.blue.next(this.blue.value - 1);
    }
    if (this.blue.value < 0) this.blue.next(0);
  }

  redPlus(double: boolean = false, triple: boolean = false) {
    if (this.red.value < 10) {
      this.redSound();
    }
    if (double) {
      this.red.next(this.red.value + 2);
    } else if (triple) {
      this.red.next(this.red.value + 3);
    } else this.red.next(this.red.value + 1);
  }

  redMinus(double: boolean = false) {
    this.redSound();

    if (double) {
      this.red.value >= 2
        ? this.red.next(this.red.value - 2)
        : this.red.next(this.red.value - 1);
    } else {
      this.red.next(this.red.value - 1);
    }
    if (this.red.value < 0) this.red.next(0);
  }

  redSound() {
    const audio = new Audio('../assets/sounds/add-v3.mp3');
    audio.play();
    console.log('red');
  }
  blueSound() {
    const audio = new Audio('../assets/sounds/add-v2.mp3');
    audio.play();
    console.log('blue');
  }
}
