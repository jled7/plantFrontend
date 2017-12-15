import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http/';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';

import { PlantService } from './services/plant.service';
import { ConnectionService } from './services/connection.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConnectComponent } from './components/connection/connect/connect.component';
import { LoginComponent } from './components/connection/login/login.component';

const appRoutes: Routes = [
  { path: '', component: ConnectionComponent, children: [
      {path: '', component: ConnectComponent},
      {path: 'login', component: LoginComponent}
  ]},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    DashboardComponent,
    ConnectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConnectionService, PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
