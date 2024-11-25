import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  propiedad = "HOLA"
  constructor(  private http: HttpClient) { }

  obtenerProductos(): Observable<any>{
    return this.http.get("https://fakestoreapi.com/products")
  }

}
