import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductsPageVM } from './products-page-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

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
  imports: [
    FrameComponent,
    CommonModule,
    ProductItemComponent,
    ProductListComponent,
    RouterLink,
    TranslocoModule,
  ],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  productsVM = signal<ProductsPageVM | null>({
    frameVM: { titleKey: 'LandingPage.frames.0.title' },
    productList: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  });
}
