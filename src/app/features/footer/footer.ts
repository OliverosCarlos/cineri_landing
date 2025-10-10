import { Component } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";

@Component({
  selector: 'app-footer',
  imports: [VWButtonComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  sendWhatsApp() {
    const numero = '523111258361'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
