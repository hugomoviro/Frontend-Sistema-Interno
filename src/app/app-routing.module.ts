import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Empresa
import { ListarEmpresasComponent } from './OrganizacionApi/Empresas/listar-empresas/listar-empresas.component';
import { DeleteEmpresasComponent } from './OrganizacionApi/Empresas/delete-empresas/delete-empresas.component';
import { CreateEmpresaComponent } from './OrganizacionApi/Empresas/create-empresa/create-empresa.component';

//Candidato
import { ListarCandidatosComponent } from './ReclutamientoApi/Candidato/listar-candidatos/listar-candidatos.component';
import { CreateCandidatosComponent } from './ReclutamientoApi/Candidato/create-candidatos/create-candidatos.component';
import { DeleteCandidatosComponent } from './ReclutamientoApi/Candidato/delete-candidatos/delete-candidatos.component';
import { UpdateCandidatosComponent } from './ReclutamientoApi/Candidato/update-candidatos/update-candidatos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  //Empresa
  {path: 'listar-empresas', component: ListarEmpresasComponent },
  {path: 'delete-empresa/:id', component: DeleteEmpresasComponent },
  {path: 'create-empresa', component: CreateEmpresaComponent},

  //Candidato
  {path: 'listar-candidatos', component: ListarCandidatosComponent },
  {path: 'create-candidatos', component: CreateCandidatosComponent },
  {path: 'delete-candidato/:id', component: DeleteCandidatosComponent },
  {path: 'update-candidato/:id', component: UpdateCandidatosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
