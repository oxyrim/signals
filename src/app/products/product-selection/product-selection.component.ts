import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../products-data';
import { Product } from '../product';

@Component({
  selector: 'app-product-selection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.scss',
})
export class ProductSelectionComponent {
  pageTitle = 'Product Selection';

  quantity = signal(1);

  products = signal(ProductData.products);

  selectedProduct = signal<Product | undefined>(undefined);

  onIncrease() {
    // this.quantity.set(5);
    this.quantity.update((q) => q + 1);
  }

  onDecrease() {
    this.quantity.update((q) => (q <= 0 ? 0 : q - 1));
  }

  qtyEffect = effect(() => {
    console.log(`Quantity changed: ${this.quantity()}`);
  });
}
