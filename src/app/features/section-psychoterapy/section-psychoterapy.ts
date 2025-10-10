import { OverlayService } from './../../services/overlay.service';
import { Component, signal } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { AppointmentModal } from '../appointment-modal/appointment-modal';

@Component({
  selector: 'app-section-psychoterapy',
  imports: [VWButtonComponent],
  templateUrl: './section-psychoterapy.html',
  styleUrls: ['./section-psychoterapy.scss', './section-psychoterapy-mobile.scss']
})
export class SectionPsychoterapy {

  items = signal<any>([
    {
      icon: 'ansiedad.png',
      title: 'Ansiedad',
      description:'Aprende a calmar tu mente, recuperar el control y respirar con libertad'
    },
    {
      icon: 'mariposa.png',
      title: 'Duelo',
      description:'Acompañamos tu proceso de pérdida con respeto, contención y escucha profunda'
    },
    {
      icon: 'amor.png',
      title: 'Autoestima',
      description:'Reconecta con tu valor personal, fortalece tu identidad y florece emocionalmente'
    },
    {
      icon: 'conciencia.png',
      title: 'Autoconocimiento',
      description:'Descubre tu mundo interno con guía terapéutica, reflexión y crecimiento emocional'
    },
    {
      icon: 'crisis-existencial.png',
      title: 'Crisis',
      description:'Intervención inmediata para momentos difíciles, con contención profesional y claridad emocional'
    },
    {
      icon: 'depresion.png',
      title: 'Depresion',
      description:'Psicoterapia transforma la depresión con escucha empática, herramientas emocionales y esperanza renovada'
    },
  ])

  constructor(
    private overlayService: OverlayService
  ){}

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
