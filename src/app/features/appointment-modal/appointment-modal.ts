import { Component } from '@angular/core';
import { VWButtonComponent } from "../../shared/vw-button/vw-button";

@Component({
  selector: 'app-appointment-modal',
  imports: [VWButtonComponent],
  templateUrl: './appointment-modal.html',
  styleUrl: './appointment-modal.scss'
})
export class AppointmentModal {

  correoLink: string = '';

  sendWhatsApp() {
    const numero = '523111258361'; //
    const mensaje = 'Hola, me gustaría agendar una cita.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  sendEmail(){
    const destinatario = 'contacto@tuservicio.com';
    const asunto = 'Solicitud de cita';
    const cuerpo = 'Hola, me gustaría agendar una cita para esta semana.';
    this.correoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.open(this.correoLink, '_blank');
  }

}
