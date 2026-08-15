import { Component } from '@angular/core';
import { FadeUpDirective } from '../../directives/fade-up';

@Component({
  selector: 'app-section-home',
  imports: [FadeUpDirective],
  standalone: true,
templateUrl: './home.html'
})
export class SectionHome {

}
