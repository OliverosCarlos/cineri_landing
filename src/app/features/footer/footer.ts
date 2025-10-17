import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [VWButtonComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ){}

  sendWhatsApp() {
    const numero = '523111258361'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    if (isPlatformBrowser(this.platformId)) {
    window.open(url, '_blank');
    }

  }
}
