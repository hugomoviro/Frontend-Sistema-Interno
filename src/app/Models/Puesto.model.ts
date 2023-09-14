export interface Puesto {
    Id?: string; // Cambiado a string para reflejar el tipo Guid
    TipoDePuestoId: number;
    Descripcion: string;
    TipoDePuesto: TipoDePuesto;
    DepartamentoId?: string; // Cambiado a string para reflejar el tipo Guid
    Departamento?: Departamento;
  }
  
  export interface TipoDePuesto {
    Id?: number;
    Nombre: string;
  }
  
  export interface Departamento {
    Id?: string; // Cambiado a string para reflejar el tipo Guid
    Numero: number;
    Nombre: string;
    DepartamentoPadreId?: string; // Cambiado a string para reflejar el tipo Guid
    DepartamentoPadre?: Departamento;
    Puestos?: Puesto[];
  }