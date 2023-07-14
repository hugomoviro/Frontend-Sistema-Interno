import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarEmpresasComponent } from './Empresas/listar-empresas/listar-empresas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-empresas', component: ListarEmpresasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
