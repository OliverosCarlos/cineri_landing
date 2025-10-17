import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-section-services',
  imports: [VWButtonComponent, ScrollAnimateDirective],
  templateUrl: './section-services.html',
  styleUrls: ['./section-services.scss', './section-services-mobile.scss']
})
export class SectionServices {

  constructor(
    private overlayService: OverlayService,
    @Inject(PLATFORM_ID) private platformId: object
  ){

  }

  callNumber(){
    if (isPlatformBrowser(this.platformId)) {
    window.location.href = 'tel:3111258361';
    }
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
