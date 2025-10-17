import { Component, OnInit } from '@angular/core';
import { SectionServices } from "../section-services/section-services";
import { SectionNeuropsychology } from "../section-neuropsychology/section-neuropsychology";
import { SectionEarlyStimulation } from "../section-early-stimulation/section-early-stimulation";
import { SectionPsychoterapy } from "../section-psychoterapy/section-psychoterapy";
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [SectionServices, SectionNeuropsychology, SectionEarlyStimulation, SectionPsychoterapy],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  constructor(
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Clínica de Neurodesarrollo y Psicoterapia en Tepic Nayarit',
      'Expertos en neuropsicología, estimulación temprana y psicoterapia para niños y adultos en la zona de Tepic Nayarit.',
      'https://cineri-tepic.web.app/assets/social-share-template.png'
    );
  }
}
