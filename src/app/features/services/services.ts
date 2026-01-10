import { Component, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  imports: [Header, VWButtonComponent, RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss', './services-mobile.scss']
})
export class Services implements OnInit{

  constructor(
    private overlayService: OverlayService,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Servicios de Neuropsicología, Estimulación Temprana y Psicoterapia | CINERI Tepic',
      'Descubre nuestros servicios: Evaluación Neuropsicológica, Estimulación Temprana y Psicoterapia para niños, adolescentes y adultos en Tepic Nayarit.',
      'https://cineri-tepic.web.app/assets/share-about.png'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
