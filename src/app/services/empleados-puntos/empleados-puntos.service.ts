import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { HttpClient } from '@angular/common/http';
import { EmpleadosPuntos } from 'src/app/models/empleados-puntos.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosPuntosService {

  constructor(private global:GlobalService,private http:HttpClient) { }
  getAll(){
    return this.http.get(`${this.global.urlApi}empleadospuntos`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}empleadospuntos/${id}`);
  }
  post(empPunt:EmpleadosPuntos){
    return this.http.post(`${this.global.urlApi}empleadospuntos`,empPunt);
  }
  delete(id:any){
    return this.http.delete(`${this.global.urlApi}empleadospuntos/delete/${id}`);
  }

  getEntreFechas(id:any,desde:any,hasta:any){
    return this.http.get(`${this.global.urlApi}/empleadospuntos/entrefechas/${id}/${desde}/${hasta}`);
  }
  

}
