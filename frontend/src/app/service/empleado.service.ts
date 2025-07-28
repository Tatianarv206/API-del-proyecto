import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Empleado } from '../models/empleado';

import { Observable } from 'rxjs'; 

@Injectable ({

providedIn: 'root'

})

export class EmpleadoService {

selectedEmpleado: Empleado = new Empleado();

empleados: Empleado[] = [];

readonly URL_API = 'http://localhost:3000/api/empleados';

constructor(private http: HttpClient) {


}

getEmpleados(): Observable<Empleado[]>  {

return this.http.get<Empleado[]>(this.URL_API);

}

 postEmpleado(empleado: Empleado): Observable<Empleado> {

  if (!empleado._id) {
    const { _id, ...resto } = empleado;
    return this.http.post<Empleado>(this.URL_API, resto);
  }
   
    return this.http.post<Empleado>(this.URL_API, empleado);
  }

putEmpleado(empleado:Empleado): Observable<Empleado> {

return this.http.put<Empleado>(`${this.URL_API}/${empleado._id}`, empleado);//

}

deleteEmpleado(_id: string): Observable<any> {

// Solo se necesita el id, no todo lo del empleado

return this.http.delete(`${this.URL_API}/${_id}`);// utilizamos el método delete

}

}