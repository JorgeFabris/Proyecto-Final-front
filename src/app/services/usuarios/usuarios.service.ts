import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';
import { Users } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  getAll(){
    return this.http.get(`${this.global.urlApi}users`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}users/${id}`);
  }
  post(punt:Users){
    return this.http.post(`${this.global.urlApi}users`,punt);
  }
  delete(id:any){
    return this.http.delete(`${this.global.urlApi}users/delete/${id}`);
  }

  login(user:any,pass:any){
    return this.http.get(`${this.global.urlApi}users/login/${user}/${pass}`);
  }
}
