import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  //Empresa
  { path: 'empresa', loadChildren: () => import('./../OrganizacionApi/Empresas/empresa.module').then(m => m.EmpresaModule) },
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
