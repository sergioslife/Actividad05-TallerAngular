import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true, // Define este componente como independiente (Angular Standalone Component).
  templateUrl: './home.component.html', // Dirección correcta del archivo de plantilla.
  styleUrls: ['./home.component.css'] // Cambiado de "styleUrl" a "styleUrls" (Error de sintaxis).
})
export class HomeComponent {
  producto: Producto[]=[]; // Variable para almacenar los datos del producto.

    
  }
