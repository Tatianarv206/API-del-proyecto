import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit{
   username: string = '';

  ngOnInit(): void {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      this.username = datos.username;
    }
  }
  

 cerrarSesion() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
  constructor(private router: Router) {}

  
}
  
