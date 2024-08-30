import { Component, input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { ProductListComponentVM } from './product-list.component.vm';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  vm = input<ProductListComponentVM | null>(null, { alias: 'vm' });
}
