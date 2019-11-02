import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EmpleadosPuntosComponent } from './pages/empleados-puntos/empleados-puntos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ConsultaPuntosComponent } from './pages/consulta-puntos/consulta-puntos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    NavbarComponent,
    PuntosComponent,
    RolesComponent,
    UsuariosComponent,
    EmpleadosPuntosComponent,
    InicioComponent,
    ConsultaPuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
