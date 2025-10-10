import { Component, computed, signal } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { CarouselComponent } from "../carousel/carousel";
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';

@Component({
  selector: 'app-section-early-stimulation',
  imports: [VWButtonComponent, CarouselComponent],
  templateUrl: './section-early-stimulation.html',
  styleUrls: ['./section-early-stimulation.scss', './section-early-stimulation-mobile.scss']
})
export class SectionEarlyStimulation {

  constructor(
    private overlayService: OverlayService
  ){}

  items = signal([
    { id: 1, title: 'Primeros descubrimientos', img: "url('/assets/card-1.jpg') no-repeat right/cover" },
    { id: 2, title: 'Explorar y moverse', img: "url('/assets/card-2.jpg') no-repeat right/cover" },
    { id: 3, title: 'Pequeños logros', img: "url('/assets/card-3.jpg') no-repeat right/cover" },
    { id: 4, title: 'Aprender jugando', img: "url('/assets/card-4.jpg') no-repeat right/cover" },
  ])

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
