import { Users } from './users.model';
import { Puntos } from './puntos.model';
import { Empleados } from './empleados.model';

export class EmpleadosPuntos{
        id?:Number;
        fecha?:Date;
        empleado?:Empleados;
        puntos?:Puntos;
        users?:Users;
        puntosingresados?:Number;
}