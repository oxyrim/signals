import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'api/products';

  productsResource = httpResource<Product[]>(() => this.productsUrl, {
    defaultValue: [],
  });

  /**
   * Use this method to fetch new resource data whenever the component is initialized.
   * This is useful for cases where the data might change frequently.
   */
  //   createProduct() {
  //     return httpResource<Product[]>(() => this.productsUrl, {
  //       defaultValue: [],
  //     });
  //   }
}
