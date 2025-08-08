import {
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.scss',
})
export class ProductSelectionComponent {
  pageTitle = 'Product Selection';

  private productService = inject(ProductService);

  selectedProduct = signal<Product | undefined>(undefined);

  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: (p) => 1,
  });

  /**
   * Use this method to fetch new resource data whenever the component is initialized.
   * This is useful for cases where the data might change frequently.
   */
  // productsResource = this.productService.createProduct();
  // products = this.productsResource.value;

  products = this.productService.productsResource.value;

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
