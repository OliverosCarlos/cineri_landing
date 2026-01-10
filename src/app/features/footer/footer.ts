import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss', './footer-mobile.scss']
})
export class Footer {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ){}

  sendWhatsApp() {
    const numero = '523111212549'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    if (isPlatformBrowser(this.platformId)) {
    window.open(url, '_blank');
    }

  }
}
