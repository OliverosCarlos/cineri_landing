import { Component, computed, OnInit, signal, PLATFORM_ID, Inject } from '@angular/core';
import { Header } from "../header/header";
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-neuropsicologia',
  imports: [Header, VWButtonComponent, CommonModule],
  templateUrl: './neuropsicologia.html',
  styleUrls: ['./neuropsicologia.scss', './neuropsicologia-mobile.scss']
})
export class Neuropsicologia implements OnInit{

  windowWidth = signal(0);
  isMobile = computed(() => this.windowWidth() <= 768);

  items = signal([
    {
      id: 1,
      title: 'Entrevista Inicial',
      opts:[true, true, true],
      icon: 'record_voice_over',
      description: 'Un primer encuentro para conocer tu historia clínica, tus preocupaciones actuales y definir los objetivos de la evaluación.'
    },
    {
      id: 2,
      title: 'Aplicación de baterías Neuropsicológicas',
      opts:[true, false, false],
      icon: 'psychology',
      description: 'Administración de pruebas estandarizadas para evaluar a fondo tus funciones cognitivas (memoria, atención, lenguaje, etc.).'
    },
    {
      id: 3,
      title: '6 sesiones',
      opts:[true, true, false],
      icon: 'self_improvement',
      description: 'Sesiones de estimulación o rehabilitación cognitiva. El número de sesiones varía según el paquete para adaptarse a tus necesidades.'
    },
    {
      id: 4,
      title: '10 sesiones',
      opts:[false, false, true],
      icon: 'self_improvement',
      description: '10 sesiones de mantenimiento cognitivo es lo mínimo recomendado de acuerdo a la evidencia científica para lograr mejoras significativas.'
    },
    {
      id: 5,
      title: 'Presentación de resultados presencial u online',
      opts:[true, true, true],
      icon: 'assessment',
      description: 'Una reunión (presencial o virtual) donde te explicaremos de forma clara y detallada los hallazgos de la evaluación.'
    },
    {
      id: 6,
      title: 'Informe clínico',
      opts:[true, true, true],
      icon: 'description',
      description: 'Un documento legal y completo que resume todo el proceso, los resultados obtenidos y las conclusiones diagnósticas.'
    },
    {
      id: 7,
      title: 'Plan de Intervención Personalizado',
      opts:[false, true, true],
      icon: 'track_changes',
      description: 'Un plan de acción diseñado específicamente para ti, con objetivos y estrategias para mejorar tu rendimiento cognitivo y bienestar.'
    },
    {
      id: 8,
      title: 'Guía de rehabilitación para trabajo en casa',
      opts:[false, true, true],
      icon: 'home_work',
      description: 'Material y ejercicios prácticos para que puedas continuar con tu rehabilitación de forma autónoma entre las sesiones.'
    }
  ])

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object,
    private overlayService: OverlayService
  ) {
      if (isPlatformBrowser(this.platformId)) {
        this.windowWidth.set(window.innerWidth);
      }
  }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Evaluación Neuropsicológica en Tepic | Diagnóstico | CINERI',
      'Realizamos evaluación y diagnóstico neuropsicológico en Tepic Nayarit. Expertos en TDAH, trastornos del aprendizaje, autismo y demencias.',
      'https://cineri-tepic.web.app/assets/share-about.png'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }

}
