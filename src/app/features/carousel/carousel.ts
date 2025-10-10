import { Component, signal, effect, Input, computed } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
  imports: [VWButtonComponent],
})
export class CarouselComponent {
  @Input() set data(value: any[]) {
    this.items.set(value);
  }
  items = signal<any>([])
  windowWidth = signal(window.innerWidth);
  isMobile = computed(() => this.windowWidth() <= 768);

  currentIndex = signal(0);

  constructor(
    private overlayService: OverlayService
  ){}

  next() {
    this.currentIndex.update(i => (i + 1) % this.items().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.items().length) % this.items().length);
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }

}
