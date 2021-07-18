import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import {CursosComponent} from "../../pages/curso/container/cursos/cursos.component";
import {MatriculaComponent} from "../../pages/matricula/container/matricula/matricula.component";
import { AlumnoComponent } from 'src/app/pages/alumno/container/alumno/alumno.component';
import { RolComponent } from 'src/app/pages/rol/container/rol/rol.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
  { path: 'products',         component: ProductComponent },
  { path: 'cursosNoe',         component: CursosComponent },
  { path: 'matriculasNoah',    component: MatriculaComponent },
  {path: 'alumnos77',         component:AlumnoComponent},
  { path: 'rolsBayon',    component: RolComponent }


];
