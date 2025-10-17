import { Component, computed, effect, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { OverlayService } from '../../services/overlay.service';
import { AppointmentModal } from '../appointment-modal/appointment-modal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  windowWidth = signal(0);
  scrollY = signal(0);
  lastScrollY = signal(0);
  isVisible = signal(true);

  isMobile = computed(() => this.windowWidth() <= 768);

  constructor(
    private overlayService: OverlayService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {

    if (isPlatformBrowser(this.platformId)) {
      // 3. Si estamos en el navegador, actualiza los signals con los valores reales.
      this.windowWidth.set(window.innerWidth);
      this.scrollY.set(window.scrollY);
      this.lastScrollY.set(window.scrollY);
    }

    // Resize listener
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
      const resizeHandler = () => this.windowWidth.set(window.innerWidth);
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
      }
      return
    });

    // Scroll listener
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
      const scrollHandler = () => {
        const currentY = window.scrollY;
        const goingDown = currentY > this.lastScrollY();
        this.isVisible.set(!goingDown);
        this.lastScrollY.set(currentY);
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
      }
      return
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
