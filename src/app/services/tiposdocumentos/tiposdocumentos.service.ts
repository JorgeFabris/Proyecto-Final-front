import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class TiposdocumentosService {

  constructor(private http:HttpClient,private global:GlobalService) { }



  getAll(){
    return this.http.get(`${this.global.urlApi}tiposdocumentos`);
  }
  get(id:any){
    return this.http.get(`${this.global.urlApi}tiposdocumentos/${id}`);
  }
}
