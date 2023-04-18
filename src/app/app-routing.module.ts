import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirecciona a la ruta dashboard al cargar la aplicacion
  { path: 'detail/:id', component: HeroDetailComponent }, // ":" sirve para indicar que es un parametro
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//app-routing.module sirve para definir las rutas de la aplicacion y exportarlas para que puedan ser usadas en el modulo principal de la aplicacion que es app.module.ts