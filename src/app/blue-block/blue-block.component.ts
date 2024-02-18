import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-blue-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-block.component.html',
  styleUrl: './blue-block.component.scss',
})
export class BlueBlockComponent {
  scoreService = inject(ScoreService);
}
