// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.products = products;
    });
  }

  onSearch(term: string) {
    this.products = this.allProducts.filter(p => 
      p.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  onFilter(category: string) {
    this.products = this.allProducts.filter(p => p.category === category);
  }
}


