import { Component, computed, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Header } from "../header/header";
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-estimulacion-temprana',
  imports: [Header, VWButtonComponent, CommonModule],
  templateUrl: './estimulacion-temprana.html',
  styleUrls: ['./estimulacion-temprana.scss', './estimulacion-temprana-mobile.scss']
})
export class EstimulacionTemprana implements OnInit{

  windowWidth = signal(0);
  isMobile = computed(() => this.windowWidth() <= 768);

  items = signal([
    {
      id: 1,
      title: 'Entrevista Inicial',
      opts:[true, true],
      icon: 'record_voice_over',
      description: 'Un primer encuentro para conocer a fondo las necesidades del niño y la familia, y definir los objetivos.'
    },
    {
      id: 2,
      title: 'Evaluación del neurodesarrollo',
      opts:[true, true],
      icon: 'psychology',
      description: 'Una valoración integral de las habilidades y áreas de desarrollo del niño para identificar fortalezas y oportunidades.'
    },
    {
      id: 3,
      title: '4 sesiones',
      opts:[true, false],
      icon: 'calendar_month',
      description: 'Un paquete enfocado de cuatro intervenciones terapéuticas diseñadas para metas específicas a corto plazo.'
    },
    {
      id: 4,
      title: '8 sesiones',
      opts:[false, true],
      icon: 'date_range',
      description: 'Un programa completo de ocho intervenciones para un seguimiento continuo y lograr avances más profundos.'
    },
    {
      id: 5,
      title: 'Informe Clínico',
      opts:[true, true],
      icon: 'clinical_notes',
      description: 'Un documento detallado con los resultados de la evaluación, el diagnóstico (si aplica) y las recomendaciones.'
    },
    {
      id: 6,
      title: 'Plan de Estimulación Personalizado',
      opts:[true, true],
      icon: 'edit_document',
      description: 'Un programa de actividades y estrategias diseñado específicamente para las metas únicas de desarrollo del niño.'
    },
    {
      id: 7,
      title: 'Guía de estimulación temprana en casa',
      opts:[false, true],
      icon: 'book_ribbon',
      description: 'Actividades, juegos y consejos prácticos para que los padres puedan continuar la estimulación en el hogar.'
    },
    {
      id: 8,
      title: 'Asesoría para papás',
      opts:[false, true],
      icon: 'escalator_warning',
      description: 'Orientación y herramientas para que los padres comprendan y apoyen activamente el proceso de desarrollo de su hijo.'
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
      'Estimulación Temprana en Tepic | Desarrollo Infantil | CINERI',
      'Impulsa el desarrollo de tu bebé con nuestro programa de estimulación temprana en Tepic. Expertos en desarrollo psicomotor, cognitivo y de lenguaje.',
      'https://cineri-tepic.web.app/assets/share-about.png'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }
}
