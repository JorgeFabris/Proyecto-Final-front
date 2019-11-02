import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { HttpClient } from '@angular/common/http';
import { Empleados } from 'src/app/models/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private global:GlobalService,private http:HttpClient) { }


  getAll(){
    return this.http.get(`${this.global.urlApi}empleados`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}empleados/${id}`);
  }
  post(emp:Empleados){
    return this.http.post(`${this.global.urlApi}empleados`,emp);
  }
  delete(id:any){
    return this.http.delete(`${this.global.urlApi}empleados/delete/${id}`);
  }
}
