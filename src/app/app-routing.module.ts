import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activacion',
    loadChildren: () => import('./pagina/activacion/activacion.module').then( m => m.ActivacionPageModule)
  },
  {
    path: 'operaciones',
    loadChildren: () => import('./pagina/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./pagina/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./pagina/manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./pagina/reporte/reporte.module').then( m => m.ReportePageModule)
  },
  {
    path: 'derechos',
    loadChildren: () => import('./pagina/derechos/derechos.module').then( m => m.DerechosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
