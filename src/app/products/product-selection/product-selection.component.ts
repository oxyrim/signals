import { Component, signal } from '@angular/core';
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
}
