import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
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
    productItems: [
      {
        title: 'Controller',
        description:
          'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        title: 'RTU',
        description:
          'After hours on the road, they finally reached the scenic overlook, the cars tires crunching on the gravel.',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        title: 'Cloud and Mobile',
        description:
          'The classic car show attracted enthusiasts from all over, each vehicle polished to perfection under the bright sun.',
        imageSrc: 'assets/lepke.jpg',
      },
    ],
  });

  route = inject(ActivatedRoute);
  productId$: Observable<number | null> = this.route.paramMap.pipe(
    map((params: ParamMap) => {
      const id = params.get('id');
      return id ? Number(id) : null;
    }),
  );
}
