import { Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ArticulosComponent } from './paginas/articulos/articulos.component';

export const routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'mi-contacto', component: ContactoComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'articulos', component: ArticulosComponent }
];
