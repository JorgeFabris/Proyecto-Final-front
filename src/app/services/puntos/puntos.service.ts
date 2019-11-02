import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';
import { Puntos } from 'src/app/models/puntos.model';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  getAll(){
    return this.http.get(`${this.global.urlApi}puntos`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}puntos/${id}`);
  }
  post(punt:Puntos){
    return this.http.post(`${this.global.urlApi}puntos`,punt);
  }
  delete(id:any){
    return this.http.delete(`${this.global.urlApi}puntos/delete/${id}`);
  }
}
