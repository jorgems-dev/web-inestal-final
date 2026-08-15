import { Routes } from '@angular/router';
import { SectionReservas } from './pages/home/sections/section-reservas/section-reservas';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';
import { SectionHome } from './pages/home/home';
import { SectionServicios } from './pages/home/sections/section-servicios/section-servicios';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: SectionHome
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'navbar',
        component: Navbar
    },
    {
        path: '**',
        redirectTo: ''
    }
];
