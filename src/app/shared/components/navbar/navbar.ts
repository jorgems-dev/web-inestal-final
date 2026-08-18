import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  sections = [
    {titulo: 'Inicio', href: '#',},
    {titulo: 'Club', href: '#home',},
    {titulo: 'Servicios', href: '#servicios',},
    {titulo: 'Academia', href: '#academia',},
    {titulo: 'Contacto', href: '#contacto',},
  ]

  isScrolled = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu() {
    setTimeout(() => {
      this.isMenuOpen = false;
      this.updateBodyScroll();
    }, 100);
  }

  private updateBodyScroll() {
    if (this.isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();

    this.isMenuOpen = false;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
