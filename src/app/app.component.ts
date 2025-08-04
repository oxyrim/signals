import { Component } from '@angular/core';
import { ProductSelectionComponent } from './products/product-selection/product-selection.component';

@Component({
    selector: 'app-root',
    imports: [ProductSelectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals';
}
