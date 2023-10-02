export interface Departamento {
    Id?: string;
    Numero: number;
    Nombre: string;
    ResponsableId?: string;
    EmpresaId?: string | null;

}

export interface Empresa {
    Id?: string;
    Nombre: string;
}

export interface Persona {
    Id?: string;
    Nombre: string;
}