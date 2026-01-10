import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";

@Component({
  selector: 'app-psicoterapia',
  imports: [Header, VWButtonComponent],
  templateUrl: './psicoterapia.html',
  styleUrl: './psicoterapia.scss'
})
export class Psicoterapia {


  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Psicoterapia y Terapia Psicológica en Tepic | CINERI',
      'Ofrecemos psicoterapia para niños, adolescentes y adultos en Tepic. Terapia para ansiedad, depresión, problemas de pareja y más. Agenda una consulta.',
      'https://cineri-tepic.web.app/assets/share-about.png'
    );
  }
}
