import { TiposDocumentos } from './tiposdocumentos.model';

export class Empleados {
     id?: Number;
     apellido?: String;
     direccion?: String;
     email?: String;
     nombre?: String;
     dni?:String;
     tiposdocs?:TiposDocumentos;
}