import { Component, OnDestroy, OnInit } from '@angular/core'; // Importación de Angular Component, OnInit y OnDestroy.
import { ProductoItemComponent } from "../producto-item/producto-item.component"; // Componente hijo.
import { ProductoService } from '../../services/producto.service'; // Servicio para interactuar con los productos.
import { Producto } from '../../Models/producto'; // Modelo de Producto.
import { Subscription } from 'rxjs'; // Importación de Subscription para manejar la suscripción.

@Component({
  selector: 'app-producto-list', // Selector del componente.
  standalone: true, // Indica que es un componente independiente.
  imports: [ProductoItemComponent], // Se importa el componente hijo.
  templateUrl: './producto-list.component.html', // Ruta del archivo de la plantilla HTML.
  styleUrls: ['./producto-list.component.css'] // Corrección en la propiedad (de "styleUrl" a "styleUrls").
})
export class ProductoListComponent implements OnInit, OnDestroy {
  producto: Producto[] = []; // Lista de productos inicializada como un arreglo vacío.
  productoSub: Subscription | undefined; // Variable para almacenar la suscripción.

  constructor(private productoService: ProductoService) {} // Inyección del servicio.

  ngOnInit(): void {
    // Suscripción al servicio para obtener los productos.
    this.productoSub = this.productoService.getProducto()
      .subscribe({
        next: (data: Producto[]) => { // Manejo de los datos recibidos.
          this.producto = data; // Almacena los productos recibidos.
          console.log('Productos cargados:', this.producto); // Mensaje descriptivo para depuración.
        },
        error: (err: any) => { // Manejo de errores.
          console.error('Error al cargar productos:', err); // Mensaje claro para errores.
        },
        complete: () => { // Llamada cuando el flujo se completa.
          console.log('Solicitud de productos completada'); // Confirmación de completado.
        }
      });
  }

  ngOnDestroy(): void {
    // Cancelación de la suscripción al destruir el componente.
    if (this.productoSub) {
      this.productoSub.unsubscribe();
      console.log('Suscripción cancelada'); // Mensaje de confirmación.
    }
  }
}
