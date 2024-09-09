import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductsPageVM } from './products-page-vm';

/**
 * ProductsPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Conditionally renders a section with a product or with a list of products based on the URL.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-product-list`, <app-product-item> components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [FrameComponent, CommonModule, ProductItemComponent, ProductListComponent, RouterLink],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  productsVM = signal<ProductsPageVM | null>({
    frameVM: { title: 'Our Products' },
    productList: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          title: 'Controller',
          description:
            'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          title: 'RTU',
          description:
            'After hours on the road, they finally reached the scenic overlook, the cars tires crunching on the gravel.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          title: 'Cloud and Mobile',
          description:
            'The classic car show attracted enthusiasts from all over, each vehicle polished to perfection under the bright sun.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  });
}
