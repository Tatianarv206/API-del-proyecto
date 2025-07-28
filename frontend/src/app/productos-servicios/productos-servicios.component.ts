import { Component, OnInit } from '@angular/core';
import { ProductosServicio } from '../models/producto-servicio';
import { ProductoServicioService } from '../services/producto-servicio.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-productos-servicios',
  templateUrl: './productos-servicios.component.html',
  styleUrls: ['./productos-servicios.component.css']
})
export class ProductosServiciosComponent implements OnInit {

  items: ProductosServicio[] = [];
  nuevoItem: ProductosServicio = {
    nombre: '',
    descripcion: '',
    precio: 0,
    tipo: 'producto'
  };
  
   modoEdicion: boolean = false;
   idEnEdicion: string = '';
   limpiarFormulario(): void {
  this.nuevoItem = {
    nombre: '',
    descripcion: '',
    precio: 0,
    tipo: 'producto'
  };
  this.modoEdicion = false;
  this.idEnEdicion = '';
}


  constructor(
    private service: ProductoServicioService ) {}

  ngOnInit(): void {
    this.obtenerItems();
  }

  obtenerItems(): void {
    this.service.getItems().subscribe((data: ProductosServicio[]) => {
      this.items = data;
    });
  }

  crearItem(): void {
  console.log('Nuevo ítem a crear:', this.nuevoItem);  // ← Añade esto

  if (this.modoEdicion) {
    this.service.updateItem(this.idEnEdicion, this.nuevoItem).subscribe((data) => {
      const index = this.items.findIndex(i => i._id === this.idEnEdicion);
      if (index !== -1) {
        this.items[index] = data;
      }
      this.limpiarFormulario();
    });
  } else {
    this.service.postItem(this.nuevoItem).subscribe((data) => {
      this.obtenerItems();     // ← Aquí debería agregarse
      this.limpiarFormulario();
    }, err => {
      console.error('Error al guardar:', err);  // ← Muestra si hay error en consola
    });
  }
}

  

  eliminarItem(id: string): void {
    this.service.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item._id !== id);
    });
  }
  editarItem(item: any) {
  this.nuevoItem = { ...item }; 
  this.modoEdicion = true;
  this.idEnEdicion = item._id;  // Guarda el ID para luego hacer el PUT
}


  
  cerrarSesion() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

}
