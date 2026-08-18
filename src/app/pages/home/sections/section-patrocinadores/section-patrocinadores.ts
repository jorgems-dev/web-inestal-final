import { Component } from '@angular/core';
import { FadeUpDirective } from '../../../../directives/fade-up';

export interface Sponsor {
  nombre: string;
  descripcion: string;
  imageUrl: string;
  websiteUrl?: string;
}

@Component({
  selector: 'app-section-patrocinadores',
  imports: [FadeUpDirective],
  standalone: true,
  templateUrl: './section-patrocinadores.html',
})
export class SectionPatrocinadores {
  patrocinadoresGenerales: Sponsor[] = [
    {
      nombre: 'Gazmar',
      descripcion: 'Servicios eléctricos',
      imageUrl: 'https://gazmar.es/wp-content/uploads/2024/01/Mesa_de_trabajo_1_copia.png',
    },
    {
      nombre: 'Alunova',
      descripcion: 'Fabricación y distribución de cerramientos y estructuras basadas en la carpintería de aluminio',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Y7fpsTLGLzs17rxB7PFAErG_B3Q_1_ksJw&s',
    },
    {
      nombre: 'Aluminios Carma',
      descripcion: 'Estructura y Aluminio',
      imageUrl: 'https://www.aluminioscarma.es/wp-content/uploads/2018/05/aluminios-carma-home-1.png',
    },
    {
      nombre: 'Tribuna',
      descripcion: 'Medios de comunicación digital',
      imageUrl: 'https://www.tribunagrupo.com/wp-content/uploads/2019/03/Logo_MasTribuna_400x200.png',
    },
    {
      nombre: 'Cearra-Trans, S.L.',
      descripcion: 'Transporte',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/500px-Unknown_person.jpg',
    },
    {
      nombre: 'MoraOil',
      descripcion: 'Gasolinera MoraOil',
      imageUrl: 'https://img.salamancartvaldia.es/simg/2022-04/IMG-3638-dsqz.webp',
    },
    {
      nombre: 'Mares Virtuales',
      descripcion: 'Servicios informáticos y digitales',
      imageUrl: 'https://i.ytimg.com/vi/vzsDjaHbmlM/hq720_2.jpg?sqp=-oaymwEiCNAFENAFSFryq4qpAxQIARUAAAAAJQAAyEI9AICiQ9ABAQ==&rs=AOn4CLAjBQZ9WHzIstFgx0rtfWtvO5hHIA',
    },
    {
      nombre: 'PGA Acero Inoxidable',
      descripcion: 'Fabricación e instalación de proyectos de carpintería metálica',
      imageUrl: 'https://pgaaceroinoxidableyhierro.com/wp-content/uploads/2025/07/logo_pablo_garcia.png',
    },
    {
      nombre: 'Excavaciones Gómez García',
      descripcion: '',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXN-ZmKPqEc2Sz0lilaaFIWEUBVsPGKCTRQ&s',
    },
    {
      nombre: 'Imprenta Eucarprint',
      descripcion: 'Servicios profesionales de imprenta, rotulación, vinilos, regalos personalizados y ropa',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoArpQSM-xav_S1NAlJRedlOygT64EsQd5Q&s',
    },
    {
      nombre: 'De Castro Gil',
      descripcion: 'Inmobiliaria',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nR9yo2h6y84sUZCJCn9QfxWdr85rlnGFTQ&s',
    },
    {
      nombre: 'Agro Salinero',
      descripcion: 'Fabricante de maquinaria agrícola',
      imageUrl: 'https://s2.ppllstatics.com/lagacetadesalamanca/www/multimedia/2025/08/27/6_20250827170444-U32210564201RbU-650x455@Gaceta%20Salamanca.jpg',
    },
  ];

  patrocinadoresPistas: Sponsor[] = [
    {
      nombre: 'García Moreno',
      descripcion: 'Especialistas en el área de reciclaje de cables',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1B_wctbbHepIu8SgOPcR-jXnCtnnJ-PwLA&s',
    },
    {
      nombre: 'Margareto',
      descripcion: 'Distribución de maquinaria agrícola, recambios originales y adaptables, y servicios de reparación',
      imageUrl: 'https://grupomargareto.com/wp-content/uploads/2025/05/GrupoMargareto-Margareto-02.webp',
    },
  ];
}
