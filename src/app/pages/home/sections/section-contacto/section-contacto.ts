import { Component } from '@angular/core';
import { FadeUpDirective } from '../../../../directives/fade-up';

@Component({
  selector: 'app-section-contacto',
  imports: [FadeUpDirective],
  standalone: true,
  templateUrl: './section-contacto.html',
})
export class SectionContacto {}
