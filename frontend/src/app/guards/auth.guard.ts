import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      return true; // tiene sesión activa
    } else {
      this.router.navigate(['/login']); // redirigir al login
      return false;
    }
  }
}
