import { Routes } from '@angular/router';

// Importa tus componentes de página.
// Asumiendo que los archivos se llaman, por ejemplo, 'home.component.ts' y la clase es 'HomeComponent'.
import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Neuropsicologia } from './features/neuropsicologia/neuropsicologia';
import { Psicoterapia } from './features/psicoterapia/psicoterapia';
import { EstimulacionTemprana } from './features/estimulacion-temprana/estimulacion-temprana';
import { Blog } from './features/blog/blog';
import { Services } from './features/services/services';
import { Contacto } from './features/contacto/contacto';
import { Professionals } from './features/professionals/professionals';
//import { NotFound } from './features/not-foun'; // Componente recomendado para 404

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'servicios',
    component: Services,
  },
  { path: 'servicios/neuropsicologia', component: Neuropsicologia, },
  { path: 'servicios/psicoterapia', component: Psicoterapia, },
  { path: 'servicios/estimulacion-temprana', component: EstimulacionTemprana, },
  {
    path: 'contacto',
    component: Contacto,
  },
  { path: 'nosotros', component: Nosotros },
  { path: 'nosotros/profesionales/magali-madera', component: Professionals },
  // Ruta "catch-all" para manejar páginas no encontradas (404). Siempre debe ir al final.
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   title: 'Página no Encontrada'
  // }
];
