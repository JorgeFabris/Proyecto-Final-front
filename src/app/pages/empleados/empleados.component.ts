import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados.model';
import { EmpleadosService } from 'src/app/services/empleados/empleados.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TiposDocumentos } from 'src/app/models/tiposdocumentos.model';
import { TiposdocumentosService } from 'src/app/services/tiposdocumentos/tiposdocumentos.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  arrEmpleados: Empleados[] = [];
  arrTiposDocs:TiposDocumentos[] = [];
  Empleado:Empleados = {};

  constructor(
              private empService: EmpleadosService, 
              private fb: FormBuilder,
              private tiposService:TiposdocumentosService) { }

  empleadoForm = this.fb.group({
    Nombre: ['', Validators.required],
    Apellido: ['',Validators.required],
    Email: [''],
    Telefono: ['', Validators.maxLength(11)],
    Dni: ['',[Validators.required, Validators.maxLength(8),Validators.minLength(7)]],
    Direccion: [''],
    TiposDoc:['',Validators.required]
  });

  ngOnInit() {
    this.getAllEmpleados();
    this.getAllTiposDocumentos();
  }


  getAllTiposDocumentos(){
    this.tiposService.getAll()
    .subscribe((data:any)=>{
      this.arrTiposDocs = data;
    })

  }


  getAllEmpleados() {
    this.empService.getAll()
      .subscribe((data: any) => {
        this.arrEmpleados = data;
      })
  }

  postEmpleados(){

    this.empService.post(this.Empleado)
    .subscribe(data=>{
      alert("Empleado agregado con exito");
      this.getAllEmpleados();
      this.Empleado = {};
    })
  }

  edit(emp){
    this.Empleado = emp;
  
  }

  

  delete(id){
   let opcion = confirm("¿Desea eliminar el registro?");
    if(opcion == true){
      this.empService.delete(id)
      .subscribe((data:any)=>{
        this.getAllEmpleados();
      })
    }

  }

}
