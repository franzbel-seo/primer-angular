import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.scss'
})
export class AcercaComponent implements OnInit{
  propiedad = "Hacer click"
  constructor(private productosService: ProductosService){
  }
  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      datos => console.log(datos),
      error => console.log("HAY UN ERROR"),
      () => console.log("Proceso terminado")
    )

  }
  ejecutarMetodo(){
    alert("HOLA MUNDO")
  }
}
