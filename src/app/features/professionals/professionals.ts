import { Component, computed, OnInit, signal, PLATFORM_ID, Inject, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Header } from "../header/header";
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-neuropsicologia',
  imports: [Header, CommonModule],
  templateUrl: './professionals.html',
  styleUrls: ['./professionals.scss', './professionals-mobile.scss']
})
export class Professionals implements OnInit, AfterViewInit {

  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;

  windowWidth = signal(0);
  isMobile = computed(() => this.windowWidth() <= 768);

  // Signals for animated counters
  animatedPatients = signal(0);
  animatedCertifications = signal(0);
  animatedCourses = signal(0);
  animatedYears = signal(0);

  specialist = signal(
    {
      id: 1,
      name: 'Jessica Magali Navarro Madera',
      photoUrl: '/assets/neuropsicologa.png',
      role: 'Neuropsicóloga',
      certifications: [
        'Curso introducción, administración y puntuación del Test Barcelona-2 ( Col·legi de Logopedes de Catalunya (CLC) - Asociación Mexicana de Neuropsicología A.C. (AMN) ).',
        'Certificación en Estimulación Temprana ( SEP - Red CONOCER ).',
        'Diplomado en Terapias Cognitivo Conductuales ( INTCCyC ).',
        'Diplomado de Acompañamiento en Procesos de Enfermedad y Muerte ( CEIES ).',
        'Curso de Lengua de Señas Mexicana Nivel A1 ( Señas para Todos en Nayarit ).',
        'Estancia en el Instituto Nacional de Neurología y Neurocirugía "Manuel Velasco Suárez" en el área de Neuropsicología Clínica.',
        'Estancia en el Hospital Civil de Gudalajara "Fray Antonio Alcalde" en el área de Neuropsicología.',
      ],
      bio: "Profesional compromotedia en la promoción del bienestar emocional y cognitivo, así como en procesos de evaluación e intervención en rehabilitación neuropsicológica. Proactiva y apasionada por el acompañamiento terapéutico, con experiencia en el ámbito clínico, la inveticagión y la ensañanza. Orientada a la mejora continua y la busqueda constante de nuevos retos profesionales.",
      hobbiesInterests: "Soy Jessica Magali, me gusta ver películas en mis tiempos libres, me considero una persona cinéfila, disfruto mucho los espacios en los que tengo contacto con la naturaleza y me encanta ir a la playa. Me gusta mucho leer sobre neurociencias y aspectos relacionados con el bienestar emocional y prevención.",
      stats: {
        patientsAttended: 20,
        certifications: 3,
        coursesGiven: 2,
        yearsExperience: 3
      },
      clinical_intervention_areas:[
        {
          id: 1,
          title: 'Trastornos del Neurodesarrollo',
          icon: 'record_voice_over',
        },
        {
          id: 2,
          title: 'Trastornos del aprendizaje',
          icon: 'record_voice_over',
        },
            {
          id: 3,
          title: 'Riesgo Neuropsicológico (Estimulación Temprana)',
          icon: 'record_voice_over',
        },
            {
          id: 4,
          title: 'Deterioro Cognitivo',
          icon: 'record_voice_over',
        },
            {
          id: 5,
          title: 'Enfermedades Cronicodegenerativas',
          icon: 'record_voice_over',
        },
            {
          id: 6,
          title: 'Trastornos Psiquiátricos',
          icon: 'record_voice_over',
        },
      ],
      about_me: 'En mis tiempos libres disfruto mucho ver películas, ya que me considero una persona cinéfila. Me gustan mucho los espacios en los que tengo contacto con la naturaleza, y me encanta ir a la playa; Me gusta mucho leer sobre neurociencias y aspectos relacionados con el bienestar emocional y la prevención.'
    }
  )

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
      'Neuropsicóloga en Tepic Nayarit',
      'Atención especializada en neuropsicología para niños y adultos en Tepic, Nayarit. Evaluación, diagnóstico e intervención en trastornos del neurodesarrollo, aprendizaje, y más.',
      'https://cineri-tepic.web.app/assets/share-about-professional1.jpg'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver(): void {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounterAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  private startCounterAnimation(): void {
    const stats = this.specialist().stats;
    const duration = 2000; // 2 seconds

    this.animateCounter(0, stats.patientsAttended, duration, this.animatedPatients);
    this.animateCounter(0, stats.certifications, duration, this.animatedCertifications);
    this.animateCounter(0, stats.coursesGiven, duration, this.animatedCourses);
    this.animateCounter(0, stats.yearsExperience, duration, this.animatedYears);
  }

  private animateCounter(start: number, end: number, duration: number, signalRef: ReturnType<typeof signal<number>>): void {
    const startTime = performance.now();
    const range = end - start;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + range * easeOutQuart);

      signalRef.set(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }
}
