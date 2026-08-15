import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";
import { Navbar } from "./shared/components/navbar/navbar";
import { SectionServicios } from "./pages/home/sections/section-servicios/section-servicios";
import { SectionReservas } from "./pages/home/sections/section-reservas/section-reservas";
import { SectionContacto } from "./pages/home/sections/section-contacto/section-contacto";
import { SectionAcademia } from './pages/home/sections/section-academia/section-academia';
import { SectionPatrocinadores } from "./pages/home/sections/section-patrocinadores/section-patrocinadores";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, SectionServicios, SectionReservas, SectionAcademia, SectionContacto, SectionPatrocinadores],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Inestal padel club'
}
