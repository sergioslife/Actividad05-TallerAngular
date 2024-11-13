// src/app/components/product-filter/product-filter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent {
  categories: string[] = [];
  @Output() filterCategory = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: string) {
    this.filterCategory.emit(category);
  }
}
