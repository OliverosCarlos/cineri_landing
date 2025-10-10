import { Component, signal } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { CarouselComponent } from "../carousel/carousel";
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';

@Component({
  selector: 'app-section-neuropsychology',
  imports: [VWButtonComponent, CarouselComponent],
  templateUrl: './section-neuropsychology.html',
  styleUrls: ['./section-neuropsychology.scss', './section-neuropsychology-mobile.scss']
})
export class SectionNeuropsychology {

  constructor(
    private overlayService: OverlayService
  ){}

  items = signal([
  { id: 1, title: 'Traumatismos craneoencefálicos', img: "url('/assets/neuropsicologia-service1.png') no-repeat right/cover" },
  { id: 2, title: 'Problemas de aprendizaje', img: "url('/assets/neuropsicologia-service2.png') no-repeat right/cover" },
  { id: 3, title: 'Trastornos del neurodesarrollo', img: "url('/assets/neuropsicologia-service3.png') no-repeat right/cover" },
  { id: 4, title: 'Deterioro cognitivo', img: "url('/assets/neuropsicologia-service4.png') no-repeat right/cover" },
])

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
