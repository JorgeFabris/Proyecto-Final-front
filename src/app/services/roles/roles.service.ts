import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { HttpClient } from '@angular/common/http';
import { Roles } from 'src/app/models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  getAll(){
    return this.http.get(`${this.global.urlApi}roles`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}roles/${id}`);
  }
  post(rol:Roles){
    return this.http.post(`${this.global.urlApi}roles`,rol);
  }
  delete(id:any){
    return this.http.delete(`${this.global.urlApi}roles/delete/${id}`);
  }
}
