import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RedBlockComponent } from './red-block/red-block.component';
import { BlueBlockComponent } from './blue-block/blue-block.component';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RedBlockComponent, BlueBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bura-score';
  scoreService = inject(ScoreService);
}
