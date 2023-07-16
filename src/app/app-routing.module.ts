import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListarEmpresasComponent } from './OrganizacionApi/Empresas/listar-empresas/listar-empresas.component';
import { ListarCandidatosComponent } from './ReclutamientoApi/Candidato/listar-candidatos/listar-candidatos.component';
import { DeleteEmpresasComponent } from './OrganizacionApi/Empresas/delete-empresas/delete-empresas.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-empresas', component: ListarEmpresasComponent },
  {path: 'listar-candidatos', component: ListarCandidatosComponent },
  {path: 'delete-empresa/:id', component: DeleteEmpresasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
