import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [ProductItemComponent, ProductListComponent],
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent {}
