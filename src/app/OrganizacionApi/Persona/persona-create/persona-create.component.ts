import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona, Puesto } from 'src/app/Models/Persona.model';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit{
  nuevaPersona: Persona = {
    Id: 0,
    Nombre: '',
    FechaDeNacimiento: '',
    Direccion: '',
    CorreoTrabajo: '',
    CorreoPersonal: '',
    Telefono: '',
    Activa: false,
    PuestoId: null // Inicializamos como nulo, luego se seleccionará desde el combo box
  };

  listaDePuestos: Puesto[] = [
    { Id: "39184CD7-6B17-4639-9AEC-90CDFCBD9184", Descripcion: 'Lider de proyectos' }, // Ejemplo de datos, reemplaza con tus propios puestos
    { Id: "828282", Descripcion: 'Puesto 2' },
    // Agrega más puestos si es necesario
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  guardarPersona() {
    // Aquí iría tu lógica para guardar la nueva persona
    // Puedes utilizar this.nuevaPersona para acceder a los datos ingresados
    // y this.nuevaPersona.Puesto para obtener el puesto seleccionado.
    // Luego, redirige a la lista de personas o realiza las acciones necesarias.
    // Ejemplo:
    // this.router.navigate(['/lista-de-personas']);
  }
  
}
