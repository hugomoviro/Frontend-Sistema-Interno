export interface Persona {
    Id: number;
    Nombre: string;
    FechaDeNacimiento: string; // Dependiendo del formato de fecha que utilices
    Direccion: string;
    CorreoTrabajo: string;
    CorreoPersonal: string;
    Telefono: string;
    Activa: boolean;
    PuestoId?: string | null; // Asumiendo que hay un modelo para Puesto
  }
  
  export interface Puesto {
    Id: string; // Cambiado a string para reflejar el tipo Guid
    Descripcion: string;
    // Agrega otros campos de Puesto si es necesario
  }