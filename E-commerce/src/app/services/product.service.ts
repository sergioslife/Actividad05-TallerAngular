// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, image: 'image1.jpg', category: 'Electrónica' },
    { id: 2, name: 'Producto 2', price: 150, image: 'image2.jpg', category: 'Ropa' },
    { id: 3, name: 'Producto 3', price: 200, image: 'image3.jpg', category: 'Electrónica' },
    // Agrega más productos
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
}
