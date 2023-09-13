import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  //Empresa
  { path: 'empresa', loadChildren: () => import('./../OrganizacionApi/Empresas/empresa.module').then(m => m.EmpresaModule) },
  //Tipo de empresa
  { path: 'tipodeempresa', loadChildren: () => import('./../OrganizacionApi/TipoDeEmpresa/tipo-de-empresa.module').then(m => m.TipoDeEmpresaModule) },
  //Tipo de documento
  { path: 'tipodedocumento', loadChildren: () => import('./../OrganizacionApi/TipoDeDocumento/tipo-de-documento.module').then(m => m.TipoDeDocumentoModule) },
  // Tipo de puesto
  { path: 'tipodepuesto', loadChildren: () => import('./../OrganizacionApi/TipoDePuesto/tipo-de-puesto.module').then(m => m.TipoDePuestoModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class RoutingModule { }
