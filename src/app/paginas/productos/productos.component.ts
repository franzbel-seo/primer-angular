import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit, OnDestroy {
  productos: any;
  constructor( private productosService: ProductosService ){
  }
  obtenerProductos(){
    this.productosService.obtenerProductos().subscribe(
      data => this.productos = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }
  ngOnInit(): void {
    this.obtenerProductos()
  }
  ngOnDestroy(): void {
    console.log('ADIOS MUNDO')
  }
}
