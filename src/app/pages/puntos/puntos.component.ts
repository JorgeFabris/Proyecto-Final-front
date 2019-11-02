import { Component, OnInit } from '@angular/core';
import { PuntosService } from 'src/app/services/puntos/puntos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Puntos } from 'src/app/models/puntos.model';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  arrPuntos:Puntos[] = [];
  Punto:Puntos = {};

  constructor(
    private puntService: PuntosService,
    private fb: FormBuilder,
  ) { }

  puntosForm = this.fb.group({
    Descrip: ['', Validators.required],
    Puntos: ['', Validators.required],
    Tope: ['',Validators.required],
    Activo: [''],
  });

  ngOnInit() {
    this.getAllPuntos();

  }





  getAllPuntos() {
    this.puntService.getAll()
      .subscribe((data: any) => {

        this.arrPuntos = data;
        console.log(this.arrPuntos);
      })
  }

  postPuntos() {

    this.puntService.post(this.Punto)
      .subscribe(data => {
        alert("Puntos agregado con exito");
        this.getAllPuntos();
        this.Punto = {};
      })
  }

  edit(punt) {
    this.Punto = punt;
  }

  delete(id) {
    let opcion = confirm("¿Desea eliminar el registro?");
    if (opcion == true) {
      this.puntService.delete(id)
        .subscribe((data: any) => {
          this.getAllPuntos();
        })
    }

  }
}
