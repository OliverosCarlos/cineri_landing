import { Component, signal, effect, Input, computed, Inject, PLATFORM_ID } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { OverlayService } from '../../services/overlay.service';
import { isPlatformBrowser } from '@angular/common';

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
  windowWidth = signal(0);
  isMobile = computed(() => this.windowWidth() <= 768);

  currentIndex = signal(0);

  constructor(
    private overlayService: OverlayService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
    if (isPlatformBrowser(this.platformId)) {
    this.windowWidth.set(window.innerWidth);
    }

  }

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
