import { Component, OnInit } from '@angular/core';
import { EmpleadosPuntosService } from 'src/app/services/empleados-puntos/empleados-puntos.service';
import { EmpleadosService } from 'src/app/services/empleados/empleados.service';
import { Empleados } from 'src/app/models/empleados.model';

@Component({
  selector: 'app-consulta-puntos',
  templateUrl: './consulta-puntos.component.html',
  styleUrls: ['./consulta-puntos.component.css']
})
export class ConsultaPuntosComponent implements OnInit {
  
  Consulta:any = {
    "id":null,
    "desde":null,
    "hasta":null
  }
  total:number = 0;
  arrPuntos:any[] = [];
  arrConsulta: any[] = [];
  arrEmpleados:Empleados[] = [];

  constructor(private empPuntService:EmpleadosPuntosService,
              private empService:EmpleadosService ) { }

  ngOnInit() {
    this.getAllEmpleados();
  }


  getAllEmpleados(){
    this.empService.getAll()
    .subscribe((data:any)=>{
      this.arrEmpleados = data;
    

    })
  }

  getEntreFechas(){
    this.total = 0;
    if(this.Consulta.id === null){
      alert("Porfavor elija un empleado");
    }else if(this.Consulta.desde === null){
      alert("Porfavor elija una fecha desde");
    }else if(this.Consulta.hasta === null){
      alert("Porfavor elija una fecha hasta");
    }else{
      this.empPuntService.getEntreFechas(this.Consulta.id,this.Consulta.desde,this.Consulta.hasta)
      .subscribe((data:any)=>{
        this.arrConsulta = data;
  
        for(let i in this.arrConsulta){
            this.total += this.arrConsulta[i].puntos.puntos;
        }
      })  
    }

  }

}
