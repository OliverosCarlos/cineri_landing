import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-politica-privacidad',
  imports: [Header],
  templateUrl: './politica-privacidad.html',
  styleUrls: ['./politica-privacidad.scss', './politica-privacidad-mobile.scss']
})
export class PoliticaPrivacidad implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Política de Privacidad | CINERI Tepic',
      'Consulta la política de privacidad de CINERI para conocer cómo recopilamos, usamos y protegemos tus datos personales.',
      'https://cineri.vaweei.com/assets/share-about.png'
    );
  }
}
