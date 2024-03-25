import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ScoreService } from '../score.service';
import { Subscription, debounceTime, delay, map } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './red-block.component.html',
  styleUrl: './red-block.component.scss',
})
export class BlockComponent implements OnInit, OnChanges, OnDestroy {
  @Input() groupName: 'red' | 'blue' = 'red';

  scoreService = inject(ScoreService);

  isUp: boolean = false;
  isDown: boolean = false;

  score: number = 0;
  scoreSubs: Subscription;

  allowMove = false;

  upMove = false;
  downMove = false;

  goUp = false;
  goDown = false;

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.groupName === 'red') {
      this.scoreSubs = this.scoreService.red
        .pipe(delay(200))
        .subscribe((res) => {
          if (res >= 11) {
            const audio = new Audio('../../assets/sounds/winning-sound.mp3');
            audio.play();
          }

          this.score = res;
        });
    } else {
      this.scoreSubs = this.scoreService.blue
        .pipe(delay(200))
        .subscribe((res) => {
          if (res >= 11) {
            const audio = new Audio('../../assets/sounds/winning-sound.mp3');
            audio.play();
          }
          this.score = res;
        });
    }
  }

  plus(double: boolean = false, triple: boolean = false) {
    this.groupName === 'red'
      ? this.scoreService.redPlus(double, triple)
      : this.scoreService.bluePlus(double, triple);

    this.upMove = true;
    setTimeout(() => {
      this.upMove = false;
    }, 300);

    this.goUp = true;
    setTimeout(() => {
      this.goUp = false;
    }, 100);
  }

  minus(double: boolean = false) {
    if (this.score > 0) {
      this.groupName === 'red'
        ? this.scoreService.redMinus(double)
        : this.scoreService.blueMinus(double);

      this.downMove = true;
      setTimeout(() => {
        this.downMove = false;
      }, 300);

      this.goDown = true;
      setTimeout(() => {
        this.goDown = false;
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.scoreSubs) this.scoreSubs.unsubscribe();
  }
}
