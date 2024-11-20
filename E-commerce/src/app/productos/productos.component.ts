import { Component, OnDestroy, OnInit } from '@angular/core'; // Corrección en la importación de "OnInint" a "OnInit".
import { ActivatedRoute } from '@angular/router'; // Importación para manejar rutas activas.
import { Producto } from '../Models/producto';  // Corrección en la ruta del modelo.
import { Subscription } from 'rxjs'; // Importación para manejar suscripciones.
import { ProductoService } from '../services/producto.service'; // Servicio para obtener productos.

@Component({
  selector: 'app-productos', // Nombre del selector del componente.
  standalone: true, // Componente independiente.
  imports: [], // Lista de componentes importados (vacía en este caso).
  templateUrl: './productos.component.html', // Ruta del archivo HTML.
  styleUrls: ['./productos.component.css'] // Corrección en la propiedad (de "styleUrl" a "styleUrls").
})
export class ProductosComponent implements OnInit, OnDestroy { // Corrección de "OnInint" a "OnInit" y uso correcto de "OnDestroy".
  slug: string | undefined; // Variable para almacenar el parámetro 'id' de la URL.
  productos: Producto |undefined; // Lista de productos inicializada como un arreglo vacío.
  productoSub: Subscription | undefined; // Variable para almacenar la suscripción.

  galeria: Array<any>=[];
  renderGaleria: Boolean=true;
  currentImg:string | undefined;

  constructor(
    private route: ActivatedRoute, // Inyección del servicio ActivatedRoute.
    private productoService: ProductoService // Inyección del servicio ProductoService.
  ) {}

  ngOnInit(): void {
    // Obtención del parámetro 'id' desde la ruta activa.
    this.slug = this.route.snapshot.params['id'];
    console.log('Slug recibido:', this.slug); // Verificación de la variable slug.

    // Suscripción al servicio para obtener productos.
    this.productoSub = this.productoService.getProducto().subscribe({
      next: (data: Producto[]) => {
        this.productos = this.productos.filter(p=>p.slug===this.slug)[0] // Asignación de los productos obtenidos al arreglo local.
         this.currentImg =this.producto.imageUrl[0]
         console.log(this.producto)
      },
      error: (err: any) => {
        console.error('Error al cargar productos:', err); // Manejo de errores en la suscripción.
      },
    });
  }

  // Limpieza de recursos al destruir el componente.
  ngOnDestroy(): void {
    if (this.productoSub) {
      this.productoSub.unsubscribe(); // Cancelar la suscripción para evitar fugas de memoria.
      console.log('Suscripción cancelada'); // Confirmación de la cancelación.
    }
  }
}
