import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input()
  products: Product[] | undefined;

  @Input()
  link: string | undefined;
}
