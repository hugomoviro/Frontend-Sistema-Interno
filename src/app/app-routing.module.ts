import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Candidato
import { ListarCandidatosComponent } from './ReclutamientoApi/Candidato/listar-candidatos/listar-candidatos.component';
import { CreateCandidatosComponent } from './ReclutamientoApi/Candidato/create-candidatos/create-candidatos.component';
import { DeleteCandidatosComponent } from './ReclutamientoApi/Candidato/delete-candidatos/delete-candidatos.component';
import { UpdateCandidatosComponent } from './ReclutamientoApi/Candidato/update-candidatos/update-candidatos.component';

//DocumentoCandidato
import { ListarDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/listar-documento-candidato/listar-documento-candidato.component';
import { CreateDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/create-documento-candidato/create-documento-candidato.component';
import { DeleteDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/delete-documento-candidato/delete-documento-candidato.component';
import { UpdateDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/update-documento-candidato/update-documento-candidato.component';



const routes: Routes = [
  //Candidato
  {path: 'listar-candidatos', component: ListarCandidatosComponent },
  {path: 'create-candidatos', component: CreateCandidatosComponent },
  {path: 'delete-candidato/:id', component: DeleteCandidatosComponent },
  {path: 'update-candidato/:id', component: UpdateCandidatosComponent },

  //DocumentoCandidato
  {path: 'listar-documento-candidato', component: ListarDocumentoCandidatoComponent },
  {path: 'create-documento-candidato', component: CreateDocumentoCandidatoComponent },
  {path: 'delete-documento-candidato/:id', component: DeleteDocumentoCandidatoComponent },
  {path: 'update-documento-candidato/:id', component: UpdateDocumentoCandidatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
