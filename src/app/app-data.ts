import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products/product';
import { ProductData } from './products/products-data';
import { Review } from './reviews/review';
import { ReviewData } from './reviews/review-data';

// Required class for the In Memory Web API
export class AppData implements InMemoryDbService {
  // Creates the 'in memory' database
  // Can then issue http requests to retrieve this data,
  // just as if the data were located on a backend server
  createDb(): { products: Product[]; reviews: Review[] } {
    const products = ProductData.products;
    const reviews = ReviewData.reviews;
    return { products, reviews };
  }
}
