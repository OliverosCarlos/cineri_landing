import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [VWButtonComponent, NgOptimizedImage],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.scss', './nosotros-mobile.scss']
})
export class Nosotros implements OnInit{

  constructor(
    private overlayService: OverlayService,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Conócenos | Expertos en Neuropsicología y Psicoterapia en Tepic Nayarit',
      'Descubre nuestro equipo de especialistas en neuropsicología, estimulación temprana y psicoterapia. Ofrecemos un enfoque humano y científico para potenciar tu bienestar y el de tu familia.',
      'https://cineri-tepic.web.app/assets/social-share-template.png'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
