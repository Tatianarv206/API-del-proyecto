import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  correo = '';
  password: string = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrar() {
    const data = {
      username: this.username,
      correo: this.correo,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/api/register', data).subscribe({
      next: (res) => {
        this.mensaje = res.status;
        // Espera 2 segundos y redirige al login
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        console.error(err);
        this.mensaje = err.error?.error || 'Error al registrar';
      }
    });
  }
}

