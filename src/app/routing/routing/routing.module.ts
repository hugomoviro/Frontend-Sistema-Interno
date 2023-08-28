import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'empresa', loadChildren: () => import('./../../OrganizacionApi/Empresas/empresa.module').then(m => m.EmpresaModule)},
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
