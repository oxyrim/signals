import {
  Component,
  computed,
  effect,
  linkedSignal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../products-data';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.scss',
})
export class ProductSelectionComponent {
  pageTitle = 'Product Selection';

  selectedProduct = signal<Product | undefined>(undefined);

  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: (p) => 1,
  });

  products = signal(ProductData.products);

  total = computed(
    () => (this.selectedProduct()?.price ?? 0) * this.quantity()
  );

  color = computed(() => (this.total() > 200 ? 'green' : 'blue'));

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
