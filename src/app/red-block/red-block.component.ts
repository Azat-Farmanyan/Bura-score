import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ScoreService } from '../score.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-red-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './red-block.component.html',
  styleUrl: './red-block.component.scss',
})
export class RedBlockComponent implements OnInit, OnDestroy {
  scoreService = inject(ScoreService);

  isUp: boolean = false;
  isDown: boolean = false;

  score: number = 0;
  scoreSubs: Subscription;

  allowMove = false;

  ngOnInit(): void {
    this.scoreSubs = this.scoreService.red.subscribe(
      (res) => (this.score = res)
    );
  }

  plus() {
    this.scoreService.redPlus();
  }
  minus() {
    this.scoreService.redMinus();
  }

  ngOnDestroy(): void {
    if (this.scoreSubs) this.scoreSubs.unsubscribe();
  }
}
