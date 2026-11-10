import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-terminos-condiciones',
  imports: [Header],
  templateUrl: './terminos-condiciones.html',
  styleUrls: ['./terminos-condiciones.scss', './terminos-condiciones-mobile.scss']
})
export class TerminosCondiciones implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Términos y Condiciones | CINERI Tepic',
      'Revisa los términos y condiciones de uso de los servicios y contenidos de CINERI.',
      'https://cineri.vaweei.com/assets/share-about.png'
    );
  }
}
