import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { ClienteInteresComponent } from './components/cliente-interes/cliente-interes.component';
import { ClienteInteresFormComponent } from './components/cliente-interes/cliente-interes-form.component';
import { KnnRecomendacionesComponent } from './components/knn-recomendaciones/knn-recomendaciones.component';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClientesComponent,
    ClienteFormComponent,
    DashboardComponent,
    ClienteInteresComponent,
    ClienteInteresFormComponent,
    KnnRecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3sioe7wpqz8uz0cz.us.auth0.com',
      clientId: 'CluuXWSxLuj9orr388ZkLjxXtxriNlwU'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
