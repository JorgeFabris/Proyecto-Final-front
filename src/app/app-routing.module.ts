import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EmpleadosPuntosComponent } from './pages/empleados-puntos/empleados-puntos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ConsultaPuntosComponent } from './pages/consulta-puntos/consulta-puntos.component';


const routes: Routes = [
  {path:'incio', component:InicioComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'puntos', component:PuntosComponent},
  {path:'roles', component:RolesComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'empleados-puntos', component:EmpleadosPuntosComponent},
  {path:'consulta-puntos', component:ConsultaPuntosComponent},

  {path: '', component: InicioComponent,},
  {path: '**', component: InicioComponent,}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
