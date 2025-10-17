import { Routes } from '@angular/router';

// Importa tus componentes de página.
// Asumiendo que los archivos se llaman, por ejemplo, 'home.component.ts' y la clase es 'HomeComponent'.
import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Neuropsicologia } from './features/neuropsicologia/neuropsicologia';
import { Psicoterapia } from './features/psicoterapia/psicoterapia';
import { EstimulacionTemprana } from './features/estimulacion-temprana/estimulacion-temprana';
import { Blog } from './features/blog/blog';
//import { NotFound } from './features/not-foun'; // Componente recomendado para 404

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Clínica de Neurodesarrollo y Psicoterapia en Tepic Nayarit',
    data: {
      meta: [
        { name: 'description', content: 'Expertos en neuropsicología, estimulación temprana y psicoterapia para niños y adultos en la zona de Tepic y Xalisco.' }
      ]
    }
  },
  {
    path: 'nosotros',
    component: Nosotros,
    title: 'Sobre Nosotros | Clínica de Bienestar Integral',
    data: {
      meta: [
        { name: 'description', content: 'Conoce nuestro equipo de especialistas comprometidos con la salud mental y el neurodesarrollo en Nayarit.' }
      ]
    }
  },
  {
    path: 'neuropsicologia',
    component: Neuropsicologia,
    title: 'Servicios de Neuropsicología',
    data: {
      meta: [
        { name: 'description', content: 'Ofrecemos evaluación, diagnóstico y rehabilitación neuropsicológica para TDAH, problemas de aprendizaje y más.' }
      ]
    }
  },
  {
    path: 'psicoterapia',
    component: Psicoterapia,
    title: 'Psicoterapia Individual, de Pareja y Familiar',
    data: {
      meta: [
        { name: 'description', content: 'Un espacio seguro para terapia de ansiedad, depresión y acompañamiento emocional en Tepic Nayarit.' }
      ]
    }
  },
  {
    path: 'estimulacion-temprana',
    component: EstimulacionTemprana,
    title: 'Programas de Estimulación Temprana',
    data: {
      meta: [
        { name: 'description', content: 'Potenciamos el desarrollo cognitivo, motor y social de bebés y niños en sus primeras etapas.' }
      ]
    }
  },
  {
    path: 'blog',
    component: Blog,
    title: 'Blog de Salud Mental y Neurodesarrollo',
    data: {
      meta: [
        { name: 'description', content: 'Artículos y recursos sobre psicología, neurodesarrollo y bienestar para toda la familia.' }
      ]
    }
  },
  // Ruta "catch-all" para manejar páginas no encontradas (404). Siempre debe ir al final.
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   title: 'Página no Encontrada'
  // }
];
