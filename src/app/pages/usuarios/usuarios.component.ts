import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RolesService } from 'src/app/services/roles/roles.service';
import { Roles } from 'src/app/models/roles.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  arrUsuarios: Users[] = [];
  arrRoles: Roles[] = [];
  msj:String;
  show:Boolean;

  Usuario: Users = {};

  constructor(
    private usrService: UsuariosService,
    private fb: FormBuilder,
    private rolesService: RolesService,
  ) { }

  usuarioForm = this.fb.group({
    Nombre: ['', Validators.required],
    User: ['', Validators.required],
    Pass: ['', Validators.required],
    ConfirmPass: ['', [Validators.required, Validators.minLength(6)]],
    Roles: ['', Validators.required],
  });

  ngOnInit() {
    this.getAllUsuarios();
    this.getAllRoles();
  }




  getAllRoles() {
    this.rolesService.getAll()
      .subscribe((data: any) => {
        this.arrRoles = data;
      })

  }


  getAllUsuarios() {
    this.usrService.getAll()
      .subscribe((data: any) => {
        this.arrUsuarios = data;
      })
  }

  postUsuarios() {
    this.usrService.post(this.Usuario)
      .subscribe(data => {
        alert("Usuario agregado con exito");
        this.getAllUsuarios();
        this.Usuario = {};
      })
  }

  edit(usr) {
    this.Usuario = usr;

  }

  passwordVerification(pass?){
    if(this.Usuario.pass === pass){
      this.show = true;
   
    }else{
      this.msj = "Las contraseñas no coinciden"
      this.show = false;
      
    }
  }



  delete(id) {
    let opcion = confirm("¿Desea eliminar el registro?");
    if (opcion == true) {
      this.usrService.delete(id)
        .subscribe((data: any) => {
          this.getAllUsuarios();
        })
    }

  }
}
