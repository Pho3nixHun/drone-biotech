import { Component, signal } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { LandingComponentVM } from './landing.component.vm';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';

/**
 * LandingPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Responsible for rendering a hero section followed by a product section.
 * - Conditionally renders a product section with a list of products.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-hero` and `app-product` components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
  selector: 'app-landing.page',
  standalone: true,
  imports: [HeroComponent, ProductItemComponent, ProductListComponent, RouterLink, FrameComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  vm = signal<LandingComponentVM>({
    links: [AppRouteSegment.PRODUCT],
    frameVMs: [{ title: 'Our Products' }],
    heroVM: {
      backgroundImageSrc: 'assets/farming.jpg',
    },
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
}
