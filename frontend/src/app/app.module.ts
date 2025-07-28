import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { EmpleadosComponent } from './componenets/empleados/empleados.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ProductosServiciosComponent } from './productos-servicios/productos-servicios.component';

@NgModule({

declarations: [

AppComponent,

EmpleadosComponent,
 LoginComponent,
 RegisterComponent,
 InicioComponent,
 BienvenidaComponent,
 ProductosServiciosComponent,


],

imports: [

BrowserModule,

FormsModule,

HttpClientModule,

AppRoutingModule

],

providers: [ ],

bootstrap: [AppComponent]

})

export class AppModule { }