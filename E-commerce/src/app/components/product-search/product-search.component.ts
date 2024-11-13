// src/app/components/product-search/product-search.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
})
export class ProductSearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }
}
