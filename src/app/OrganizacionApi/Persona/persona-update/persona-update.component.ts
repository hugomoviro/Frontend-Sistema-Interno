import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, Puesto } from 'src/app/Models/Persona.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-persona-update',
  templateUrl: './persona-update.component.html',
  styleUrls: ['./persona-update.component.css']
})
export class PersonaUpdateComponent implements OnInit{
  public personaForm!: FormGroup;
  public listaDePuestos: Puesto[] = [];
  public personaId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repository: RepositoryService,
    private dialog: MatDialog,
    private datePipe : DatePipe
  ) { }

  ngOnInit(): void {
    this.personaForm = new FormGroup({
      Nombre: new FormControl('', [Validators.required]),
      FechaDeNacimiento: new FormControl('', [Validators.required]),
      Direccion: new FormControl('', [Validators.required]),
      CorreoTrabajo: new FormControl('', [Validators.required]),
      CorreoPersonal: new FormControl('', [Validators.required]),
      Telefono: new FormControl('', [Validators.required]),
      Activa: new FormControl(false, [Validators.required]),
      PuestoId: new FormControl('', [Validators.required])
    });

  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   if (idParam !== null) {
  //     this.personaId = +idParam;
  //     this.getListaDePuestos();
  //     this.getPersonaDetails(this.personaId);
  // }
    this.getRecordById();
    this.getListaDePuestos();
  }

  getPersonaDetails = (id: number) => {
    let url = `persona/${id}`;
    this.repository.getData(url)
      .subscribe((res: any) => {
        const persona: Persona = res as Persona;
        //Fecha dd/mm/yyyy
        persona.FechaDeNacimiento = this.datePipe.transform(persona.FechaDeNacimiento, 'yyyy-MM-dd');
        this.personaForm.patchValue(persona);
      });
  }

  getRecordById = () =>{
    let id: string = this.route.snapshot.params["id"];
    let getByIDUrl: string = 'persona/'+id;
    this.repository.getData(getByIDUrl)
    .subscribe(res => {
      this.personaForm.patchValue(res);
    },
    (error) =>{
      this.dialog.open(error.message);
    })
  }

  private update = (personaForm: any) => {
    if(this.personaForm.valid)
    {
      this.updatePersona(personaForm);
    }
  }

  updatePersona = (personaForm : any) => {
    let id: string = this.route.snapshot.params["id"];
    let updateUrl: string = 'persona/'+id;
    this.repository.update(updateUrl, personaForm)
    .subscribe(res => {
      this.router.navigate(['/persona']);
    },
    (error => {
      this.dialog.open(error.message);
    })
    )
  }

  getListaDePuestos = () => {
    let url = 'puesto';
    this.repository.getData(url)
      .subscribe((res: any) => {
        this.listaDePuestos = res.value as Puesto[];
        console.log('Lista de Puestos:', this.listaDePuestos);
      });
  }

  public cancelar = () => {
    this.router.navigate(['/persona']);
  }
}
