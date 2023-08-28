import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentoCandidato } from 'src/app/Models/DocumentoCandidato.model';
import { DocumentoCandidatoService } from 'src/app/service/ReclutamientoApi/documentoCandidato.service';

@Component({
  selector: 'app-delete-documento-candidato',
  templateUrl: './delete-documento-candidato.component.html',
  styleUrls: ['./delete-documento-candidato.component.css']
})
export class DeleteDocumentoCandidatoComponent {
  constructor(private activeRoute: ActivatedRoute, private documentoCandidatoService: DocumentoCandidatoService) { }
  public docuCand!: DocumentoCandidato;
  private id: string = this.activeRoute.snapshot.params['id'];
  ngOnInit(): void {
    this.getDeleteRecord();
  }

  public getDeleteRecord = () => {
    this.documentoCandidatoService.getCandidatoById(this.id).subscribe(res => {
      this.docuCand = res as DocumentoCandidato;
      console.log(res)})
  }

  public deleteRecord = () => {
    if (this.docuCand.Id == this.id) {
      this.documentoCandidatoService.delete(this.id).subscribe(res => {
        window.location.href = "listar-documento-candidato";
      });
    }
  }

  public onCancel = () => {
    window.location.href = "listar-documento-candidato";
  }
}
