// dynamic-button.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'vw-button',
  imports: [CommonModule],
  template: `
    <button [ngClass]="['btn', 'btn-' + variant()]">
      <span class="material-symbols-outlined">{{icon()}}</span>
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './vw-button.scss'
})
export class VWButtonComponent {
  readonly icon = input<string>('info');
  readonly variant = input<'primary' | 'secondary' | 'tertiary'>('primary');

  constructor(
  ){}

}
