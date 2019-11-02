import { Component, OnInit } from '@angular/core';
import { EmpleadosPuntos } from 'src/app/models/empleados-puntos.model';
import { EmpleadosPuntosService } from 'src/app/services/empleados-puntos/empleados-puntos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados/empleados.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { PuntosService } from 'src/app/services/puntos/puntos.service';
import { Empleados } from 'src/app/models/empleados.model';
import { Puntos } from 'src/app/models/puntos.model';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-empleados-puntos',
  templateUrl: './empleados-puntos.component.html',
  styleUrls: ['./empleados-puntos.component.css']
})
export class EmpleadosPuntosComponent implements OnInit {

  arrEmpleadosPuntos: EmpleadosPuntos[] = [];

  arrEmpleados:Empleados[] = [];
  arrPuntos:Puntos[] = [];
  arrUsuarios:Users[] = [];

  EmpleadoPunto:EmpleadosPuntos = {};

  constructor(
              private empPuntService: EmpleadosPuntosService, 
              private fb: FormBuilder,
              private empService:EmpleadosService,
              private usrService:UsuariosService,
              private puntService:PuntosService
              
              ) { }

  empleadosPuntosForm = this.fb.group({
    Fecha: ['', Validators.required],
    Usuario:['', Validators.required],
    Empleado:['', Validators.required],
    Puntos:['', Validators.required]
  });

  ngOnInit() {
    this.getAllEmpleadosPuntos();
    this.getAllPuntos();
    this.getAllEmpleados();
    this.getAllUsuarios();

  }



  getAllPuntos() {
    this.puntService.getAll()
      .subscribe((data: any) => {
        this.arrPuntos = data;
      })
  }
  getAllEmpleados() {
    this.empService.getAll()
      .subscribe((data: any) => {
        this.arrEmpleados = data;
      })
  }
  getAllUsuarios() {
    this.usrService.getAll()
      .subscribe((data: any) => {
        this.arrUsuarios = data;
      })
  }


  getAllEmpleadosPuntos() {
    this.empPuntService.getAll()
      .subscribe((data: any) => {
        this.arrEmpleadosPuntos = data;
      })
  }



  postEmpleadosPuntos(){
    this.EmpleadoPunto.puntosingresados = this.EmpleadoPunto.puntos.puntos;


   this.empPuntService.post(this.EmpleadoPunto)
   .subscribe(data=>{
     alert("Empleado puntos agregado con exito");
     this.getAllEmpleadosPuntos();
     this.EmpleadoPunto = {};
   })
  }

  edit(emp){
    this.EmpleadoPunto = emp;
  
  }

  

  delete(id){
   let opcion = confirm("¿Desea eliminar el registro?");
    if(opcion == true){
      this.empPuntService.delete(id)
      .subscribe((data:any)=>{
        this.getAllEmpleadosPuntos();
      })
    }

  }

}
