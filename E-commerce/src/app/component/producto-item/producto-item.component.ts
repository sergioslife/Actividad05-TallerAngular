import { Component, Input, OnInit } from '@angular/core'; // Importación de Angular Component, Input y OnInit.
import { Producto } from '../../Models/producto'; 

@Component({
  selector: 'app-producto-item', // Selector del componente.
  standalone: true, // Indica que es un componente independiente.
  imports: [], // Por ahora, no hay importaciones adicionales necesarias.
  templateUrl: './producto-item.component.html', // Corrección en el nombre del archivo del template.
  styleUrls: ['./producto-item.component.css'] // Corrección en el nombre de la propiedad (de "styleUrl" a "styleUrls").
})
export class ProductoItemComponent implements OnInit {

  @Input() producto: Producto | undefined; // Decorador @Input para recibir datos del componente padre.

  ngOnInit(): void {
    // Verifica si el producto se pasa correctamente desde el componente padre.
    console.log('Producto recibido:', this.producto);
  }
}
