import { Component } from '@angular/core';
import { FadeUpDirective } from '../../../../directives/fade-up';

@Component({
  selector: 'app-section-patrocinadores',
  imports: [FadeUpDirective],
  standalone: true,
  templateUrl: './section-patrocinadores.html',
})
export class SectionPatrocinadores {}
