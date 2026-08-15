import { Component } from '@angular/core';
import { FadeUpDirective } from '../../../../directives/fade-up';

@Component({
  selector: 'app-section-servicios',
  imports: [FadeUpDirective],
  templateUrl: './section-servicios.html'
})
export class SectionServicios {
  servicios = [
    { title: 'Reserva online', desc: '24/7 reservas' },
    { title: 'Escuela de pádel', desc: 'Clases para todos los niveles' },
    { title: 'Clases particulares', desc: 'Entrenamiento personalizado' },
    { title: 'Torneos', desc: 'Competiciones mensuales' },
    { title: 'Tienda', desc: 'Material deportivo' },
    { title: 'Horario flexible', desc: '7:00 - 00:00' }
  ];
}