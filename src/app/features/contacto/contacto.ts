import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {

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
