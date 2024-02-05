import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule petitciones http para interactuar API BackEnd
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteService } from './components/clientes/cliente.service';
import { FormsModule } from '@angular/forms';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { ClienteInteresComponent } from './components/cliente-interes/cliente-interes.component';
import { ClienteInteresFormComponent } from './components/cliente-interes/cliente-interes-form.component';
import { KnnRecomendacionesComponent } from './components/knn-recomendaciones/knn-recomendaciones.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes/clienteform', component: ClienteFormComponent },
  { path: 'clientes/clienteform/:id', component: ClienteFormComponent },
  { path: 'clientes-interes', component: ClienteInteresComponent},
  { path: 'clientes-interes/clientes-interes-form', component: ClienteInteresFormComponent},
  { path: 'clientes-interes/clientes-interes-form/:id', component: ClienteInteresFormComponent},
  { path: 'knn-recomendaciones', component: KnnRecomendacionesComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
