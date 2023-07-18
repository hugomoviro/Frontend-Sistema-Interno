import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from 'src/app/service/ReclutamientoApi/candidato.service';
import { Candidato } from 'src/app/Models/Candidato.model';

@Component({
  selector: 'app-delete-candidatos',
  templateUrl: './delete-candidatos.component.html',
  styleUrls: ['./delete-candidatos.component.css']
})
export class DeleteCandidatosComponent {
  constructor(private activeRoute: ActivatedRoute, private candidatoService: CandidatoService) { }
  public cand!: Candidato;
  private id: string = this.activeRoute.snapshot.params['id'];
  private deleteUrl: string = `https://localhost:5001/api/odata/Candidato/${this.id}`;
  ngOnInit(): void {
    this.getDeleteRecord();
  }

  public getDeleteRecord = () => {
    let apiUrl: string = `https://localhost:5001/api/odata/Candidato/${this.id}`;
    this.candidatoService.getCandidatoById(this.id).subscribe(res => {
      this.cand = res as Candidato;
      console.log(res)})
  }

  public deleteRecord = () => {
    if (this.cand.Id == this.id) {
      this.candidatoService.delete(this.id).subscribe(res => {
        window.location.href = "listar-candidatos";
      });
    }
  }

  public onCancel = () => {
    console.log(this.deleteUrl);
    window.location.href = "listar-candidatos";
    
  }
}

