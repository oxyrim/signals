import { effect, inject, Injectable } from '@angular/core';
import { ProductService } from '../products/product.service';
import { httpResource } from '@angular/common/http';
import { Review } from './review';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviewsUrl = '/api/reviews';

  private productService = inject(ProductService);

  reviewsResource = httpResource<Review[]>(
    () => {
      const p = this.productService.selectedProduct();
      if (p) {
        return `${this.reviewsUrl}?productId=^${p.id}$`;
      } else {
      }
      return undefined;
    },
    { defaultValue: [] }
  );
}
