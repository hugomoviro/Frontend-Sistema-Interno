import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/service/ReclutamientoApi/documento.service';

@Component({
  selector: 'app-create-documento',
  templateUrl: './create-documento.component.html',
  styleUrls: ['./create-documento.component.css'],
  providers: [DatePipe]
})
export class CreateDocumentoComponent implements OnInit {


  constructor( private documentoService: DocumentoService,  private datePipe: DatePipe) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
