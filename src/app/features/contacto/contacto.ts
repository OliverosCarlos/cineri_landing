import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private seoService: SeoService,
  ){}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Contacto | Agenda tu cita en CINERI Tepic',
      'Contáctanos para agendar tu cita de neuropsicología, estimulación temprana o psicoterapia en Tepic, Nayarit.',
      'https://cineri.vaweei.com/assets/share-about.png',
    );
  }

  sendWhatsApp() {
    const numero = '523111212549'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    if (isPlatformBrowser(this.platformId)) {
    window.open(url, '_blank');
    }

  }

}
