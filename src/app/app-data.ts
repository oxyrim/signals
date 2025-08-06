import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products/product';
import { ProductData } from './products/products-data';

// Required class for the In Memory Web API
export class AppData implements InMemoryDbService {
  // Creates the 'in memory' database
  // Can then issue http requests to retrieve this data,
  // just as if the data were located on a backend server
  createDb(): { products: Product[] } {
    const products = ProductData.products;
    return { products };
  }
}
