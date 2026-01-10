import { Component, OnInit, signal } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { Header } from "../header/header";
import { Router } from '@angular/router';
@Component({
  selector: 'app-nosotros',
  imports: [VWButtonComponent, Header],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.scss', './nosotros-mobile.scss']
})
export class Nosotros implements OnInit{

  specialists = signal([
      {
        id: 1,
        name: 'Jessica Magali Navarro Madera',
        photoUrl: '/assets/neuropsicologa.png',
        role: 'Neuropsicóloga',
        bio: "Profesional compromotedia en la promoción del bienestar emocional y cognitivo, así como en procesos de evaluación e intervención en rehabilitación neuropsicológica. Proactiva y apasionada por el acompañamiento terapéutico, con experiencia en el ámbito clínico, la inveticagión y la ensañanza. Orientada a la mejora continua y la busqueda constante de nuevos retos profesionales."
      }
    ]
  )

  constructor(
    private overlayService: OverlayService,
    private seoService: SeoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Sobre Nosotros | Conoce al Equipo de CINERI en Tepic Nayarit',
      'Conoce nuestra misión, valores y al equipo de especialistas de CINERI. Descubre por qué somos tu mejor opción en salud mental en Tepic Nayarit.',
      'https://cineri-tepic.web.app/assets/share-about.png'
    );
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }

  goTo(path: string){
    this.router.navigate([path]);
  }
}
