import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'datos-vehiculo',
    pathMatch: 'full'
  },
  {
    path: 'datos-vehiculo',
    loadChildren: () => import('./datos-vehiculo/datos-vehiculo.module').then( m => m.DatosVehiculoPageModule)
  },
  {
    path: 'datos-conductor',
    loadChildren: () => import('./datos-conductor/datos-conductor.module').then( m => m.DatosConductorPageModule)
  },
  {
    path: 'salida-novalida',
    loadChildren: () => import('./salida-novalida/salida-novalida.module').then( m => m.SalidaNovalidaPageModule)
  },
  {
    path: 'tipos-operacion',
    loadChildren: () => import('./tipos-operacion/tipos-operacion.module').then( m => m.TiposOperacionPageModule)
  },
  {
    path: 'origen',
    loadChildren: () => import('./origen/origen.module').then( m => m.OrigenPageModule)
  },
  {
    path: 'mensaje-origen',
    loadChildren: () => import('./mensaje-origen/mensaje-origen.module').then( m => m.MensajeOrigenPageModule)
  },
  {
    path: 'transito',
    loadChildren: () => import('./transito/transito.module').then( m => m.TransitoPageModule)
  },
  {
    path: 'mensaje-transito',
    loadChildren: () => import('./mensaje-transito/mensaje-transito.module').then( m => m.MensajeTransitoPageModule)
  },
  {
    path: 'descenso',
    loadChildren: () => import('./descenso/descenso.module').then( m => m.DescensoPageModule)
  },
  {
    path: 'patio-reserva',
    loadChildren: () => import('./patio-reserva/patio-reserva.module').then( m => m.PatioReservaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'independientes',
    loadChildren: () => import('./independientes/independientes.module').then( m => m.IndependientesPageModule)
  },
  {
    path: 'independientes-resultados',
    loadChildren: () => import('./independientes-resultados/independientes.module').then( m => m.IndependientesPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'resultados-categoria',
    loadChildren: () => import('./resultados-categoria/resultados-categoria.module').then( m => m.ResultadosCategoriaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'notificacion',
    loadChildren: () => import('./notificacion/notificacion.module').then( m => m.NotificacionPageModule)
  },
  {
    path: 'detalle-notificacion',
    loadChildren: () => import('./detalle-notificacion/detalle-notificacion.module').then( m => m.DetalleNotificacionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'servicios-activos',
    loadChildren: () => import('./servicios-activos/servicios-activos.module').then( m => m.ServiciosActivosPageModule)
  },
  {
    path: 'historial-servicios',
    loadChildren: () => import('./historial-servicios/historial-servicios.module').then( m => m.HistorialServiciosPageModule)
  },
  {
    path: 'crear-oferta',
    loadChildren: () => import('./crear-oferta/crear-oferta.module').then( m => m.CrearOfertaPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'oferta-detalle',
    loadChildren: () => import('./oferta-detalle/oferta-detalle.module').then( m => m.OfertaDetallePageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
  },
  {
    path: 'unirse',
    loadChildren: () => import('./unirse/unirse.module').then( m => m.UnirsePageModule)
  },
  {
    path: 'servicio-empresa-detalle',
    loadChildren: () => import('./servicio-empresa-detalle/servicio-empresa-detalle.module').then( m => m.ServicioEmpresaDetallePageModule)
  },
  {
    path: 'servicio-profesional-detalle',
    loadChildren: () => import('./servicio-profesional-detalle/servicio-profesional-detalle.module').then( m => m.ServicioProfesionalDetallePageModule)
  },
  {
    path: 'resultados-empresa',
    loadChildren: () => import('./resultados-empresa/resultados-empresa.module').then( m => m.ResultadosEmpresaPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'empresa-resultados',
    loadChildren: () => import('./empresa-resultados/empresa.module').then( m => m.EmpresaPageModule)
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
