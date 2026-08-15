import { Component } from '@angular/core';
import { FadeUpDirective } from '../../../../directives/fade-up';

@Component({
  selector: 'app-section-academia',
  imports: [FadeUpDirective],
  standalone: true,
  templateUrl: './section-academia.html',
})
export class SectionAcademia {}
