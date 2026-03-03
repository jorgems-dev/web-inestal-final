import { Routes } from '@angular/router';
import { SectionReservas } from './pages/home/sections/section-reservas/section-reservas';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

export const routes: Routes = [

    {
        path: '',
        component: SectionReservas
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
