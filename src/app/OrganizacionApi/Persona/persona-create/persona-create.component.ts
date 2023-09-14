import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Persona, Puesto } from 'src/app/Models/Persona.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit{

    public nuevaPersona!: FormGroup;

  listaDePuestos: Puesto[] = [
    { Id: "39184CD7-6B17-4639-9AEC-90CDFCBD9184", Descripcion: 'Lider de proyectos' }, // Ejemplo de datos, reemplaza con tus propios puestos
    { Id: "828282", Descripcion: 'Puesto 2' },
    // Agrega más puestos si es necesario
  ];

  constructor(private router: Router,
              private repository: RepositoryService,
              private dialog: MatDialog) {}

  ngOnInit(): void {

    this.nuevaPersona= new FormGroup ({
      Nombre: new FormControl('', [Validators.required]),
      FechaDeNacimiento: new FormControl('', [Validators.required]),
      Direccion: new FormControl('', [Validators.required]),
      CorreoTrabajo: new FormControl('', [Validators.required]),
      CorreoPersonal: new FormControl('', [Validators.required]),
      Telefono: new FormControl('', [Validators.required]),
      Activa: new FormControl(false, [Validators.required]),
      PuestoId: new FormControl('', [Validators.required]) // Inicializamos como nulo, luego se seleccionará desde el combo box
    });
  }

  createPersona = (nuevaPersonaValue: any) => {
    if (this.nuevaPersona.valid) {
      this.executeCreation(nuevaPersonaValue);
    }
  }

  executeCreation = (nuevaPersonaValue: any) => {
    let newRecord: Persona = {
      Nombre: nuevaPersonaValue.Nombre,
      FechaDeNacimiento: nuevaPersonaValue.FechaDeNacimiento,
      Direccion: nuevaPersonaValue.Direccion,
      CorreoTrabajo: nuevaPersonaValue.CorreoTrabajo,
      CorreoPersonal: nuevaPersonaValue.CorreoPersonal,
      Telefono: nuevaPersonaValue.Telefono,
      Activa: nuevaPersonaValue.Activa,
      PuestoId: nuevaPersonaValue.PuestoId
    }
    let apiUrl = 'persona';
    this.repository.create(apiUrl, newRecord)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/persona']);
      }
      )
  }
  
}
