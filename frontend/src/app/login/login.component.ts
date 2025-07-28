import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  errorMensaje = '';

  constructor(private http: HttpClient, private router:Router) { }

  login() {

    const data = { username: this.username, password: this.password};
    
    this.http.post<any>('http://localhost:3000/api/login', data).subscribe({
      next: (response) => {
        console.log(response);
         localStorage.setItem('usuario', JSON.stringify(response.usuario));
        this.router.navigate(['/bienvenida']);
      },
       error: (err) => {
        console.error(err);
        this.errorMensaje = err.error?.error || 'Usuario o contraseña incorrectos. Intenta nuevamente.';
      }
    });
  }
}

