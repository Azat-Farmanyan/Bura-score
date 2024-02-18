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
import { Subscription, delay } from 'rxjs';
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
        .pipe(delay(500))
        .subscribe((res) => (this.score = res));
    } else {
      this.scoreSubs = this.scoreService.blue
        .pipe(delay(500))
        .subscribe((res) => (this.score = res));
    }
  }

  plus() {
    this.groupName === 'red'
      ? this.scoreService.redPlus()
      : this.scoreService.bluePlus();

    this.upMove = true;
    setTimeout(() => {
      this.upMove = false;
    }, 1000);

    this.goUp = true;
    setTimeout(() => {
      this.goUp = false;
    }, 300);
  }

  minus() {
    if (this.score > 0) {
      this.groupName === 'red'
        ? this.scoreService.redMinus()
        : this.scoreService.blueMinus();

      this.downMove = true;
      setTimeout(() => {
        this.downMove = false;
      }, 1000);

      this.goDown = true;
      setTimeout(() => {
        this.goDown = false;
      }, 300);
    }
  }

  ngOnDestroy(): void {
    if (this.scoreSubs) this.scoreSubs.unsubscribe();
  }
}
