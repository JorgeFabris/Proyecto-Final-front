import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  urlApi = 'http://localhost:8090/'

  constructor() { }
}
