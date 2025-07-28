import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosServicio } from '../models/producto-servicio';

export interface Producto {
  _id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: 'producto' | 'servicio';
}

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  private URL_API = 'http://localhost:3000/api/productos-servicios';
  selectedItem: ProductosServicio = new ProductosServicio();
  items: ProductosServicio[] = [];

  constructor(private http: HttpClient) { }

  getItems(): Observable<ProductosServicio[]> {
    return this.http.get<ProductosServicio[]>(this.URL_API);
  }

  postItem(item: ProductosServicio): Observable<ProductosServicio> {
    return this.http.post<ProductosServicio>(this.URL_API, item);
  }

  putItem(item: ProductosServicio): Observable<ProductosServicio> {
    return this.http.put<ProductosServicio>(`${this.URL_API}/${item._id}`, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
  updateItem(id: string, item: ProductosServicio) {
  return this.http.put<ProductosServicio>(`${this.URL_API}/${id}`, item);
}

}
