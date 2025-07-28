import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EmpleadosComponent } from "./componenets/empleados/empleados.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./guards/auth.guard";
import { InicioComponent } from "./inicio/inicio.component";
import { BienvenidaComponent } from "./bienvenida/bienvenida.component";
import { ProductosServiciosComponent } from "./productos-servicios/productos-servicios.component";

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: "", redirectTo: "login", pathMatch: "full" },
    {path: "login", component: LoginComponent },
    {path: "register", component: RegisterComponent},
    {path: "bienvenida", component: BienvenidaComponent},
    {path: "empleados", component: EmpleadosComponent, canActivate: [AuthGuard]},
    {path: "productos-servicios", component: ProductosServiciosComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }