import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/roles.model';
import { RolesService } from 'src/app/services/roles/roles.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  arrRoles:Roles[] = [];
  Rol:Roles = {};

  constructor(
    private rolService: RolesService,
    private fb: FormBuilder,
  ) { }

  rolesForm = this.fb.group({
    Descripcion: ['', Validators.required],
    Nivel: ['', Validators.required],
  });

  ngOnInit() {
    this.getAllRoles();

  }





  getAllRoles() {
    this.rolService.getAll()
      .subscribe((data: any) => {

        this.arrRoles = data;
        console.log(this.arrRoles);
      })
  }

  postRoles() {

    this.rolService.post(this.Rol)
      .subscribe(data => {
        alert("Rol agregado con exito");
        this.getAllRoles();
        this.Rol = {};
      })
  }

  edit(punt) {
    this.Rol = punt;
  }

  delete(id) {
    let opcion = confirm("¿Desea eliminar el registro?");
    if (opcion == true) {
      this.rolService.delete(id)
        .subscribe((data: any) => {
          this.getAllRoles();
        })
    }

  }
}
