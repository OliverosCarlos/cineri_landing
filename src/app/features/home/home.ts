import { Component, OnInit } from '@angular/core';
import { SectionServices } from "../section-services/section-services";
import { SectionNeuropsychology } from "../section-neuropsychology/section-neuropsychology";
import { SectionEarlyStimulation } from "../section-early-stimulation/section-early-stimulation";
import { SectionPsychoterapy } from "../section-psychoterapy/section-psychoterapy";
import { SeoService } from '../../services/seo.service';
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [SectionServices, SectionNeuropsychology, SectionEarlyStimulation, SectionPsychoterapy, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  constructor(
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'CINERI | Clínica de Neuropsicología, Estimulación Temprana y Psicoterapia en Tepic Nayarit',
      'En CINERI Tepic somos expertos en neuropsicología, estimulación temprana y psicoterapia. Ayudamos a niños y adultos. ¡Agenda tu cita hoy!',
      'https://cineri-tepic.web.app/assets/social-share-template1_1.png'
    );
  }
}
