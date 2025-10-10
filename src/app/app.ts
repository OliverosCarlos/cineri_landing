import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollAnimateDirective } from './directives/scroll-animate.directive'
import { VWButtonComponent } from "./shared/vw-button/vw-button";
import { SectionEarlyStimulation } from "./features/section-early-stimulation/section-early-stimulation";
import { SectionNeuropsychology } from "./features/section-neuropsychology/section-neuropsychology";
import { CommonModule } from '@angular/common';
import { SectionServices } from "./features/section-services/section-services";
import { CarouselComponent } from "./features/carousel/carousel";
import { SectionPsychoterapy } from "./features/section-psychoterapy/section-psychoterapy";
import { Footer } from "./features/footer/footer";
import { OverlayService } from './services/overlay.service';
import { AppointmentModal } from './features/appointment-modal/appointment-modal';

@Component({
  selector: 'app-root',
  imports: [VWButtonComponent, SectionEarlyStimulation, SectionNeuropsychology, CommonModule, SectionServices, SectionPsychoterapy, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './app-mobile.scss']
})
export class App {
  protected readonly title = signal('cineri_landing');
  windowWidth = signal(window.innerWidth);
  scrollY = signal(window.scrollY);
  lastScrollY = signal(window.scrollY);
  isVisible = signal(true);

  isMobile = computed(() => this.windowWidth() <= 768);

  constructor(
    private overlayService: OverlayService
  ) {
    // Resize listener
    effect(() => {
      const resizeHandler = () => this.windowWidth.set(window.innerWidth);
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    });

    // Scroll listener
    effect(() => {
      const scrollHandler = () => {
        const currentY = window.scrollY;
        const goingDown = currentY > this.lastScrollY();
        this.isVisible.set(!goingDown);
        this.lastScrollY.set(currentY);
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    });
  }

  openModal(){
    this.overlayService.openModal(AppointmentModal)
  }

  goTo(socialNetwork : string){
    switch (socialNetwork) {
      case "facebook":
        window.open('https://www.facebook.com/profile.php?id=61572915021622', '_blank');
        break;
      case "instagram":
        window.open('https://www.instagram.com/cineri_tepic/', '_blank');
        break;
      default:
        break;
    }
  }

  sendWhatsApp() {
    const numero = '523111258361'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

}
