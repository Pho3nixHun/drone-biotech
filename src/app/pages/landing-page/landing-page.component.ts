import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { LandingComponentVM } from './landing.component.vm';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { PartnerListComponent } from '@components/partner-list/partner-list.component';
import { PartnerLogoComponent } from '@components/partner-list/components/partner-logo/partner-logo.component';
import { TestimonialItemComponent } from '@components/testimonial-item/testimonial-item.component';
import { CarouselComponent } from '@components/carousel/carousel.component';

/**
 * LandingPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Responsible for rendering a hero section followed by a product section.
 * - Conditionally renders a product section with a list of products.
 * - Conditionally renders a partner section with a list of partners and a testimonial carousel.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-hero` and different frame components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
  selector: 'app-landing.page',
  standalone: true,
  imports: [
    HeroComponent,
    ProductItemComponent,
    ProductListComponent,
    RouterLink,
    FrameComponent,
    PartnerListComponent,
    PartnerLogoComponent,
    TestimonialItemComponent,
    CarouselComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  vm = signal<LandingComponentVM>({
    frameVMs: [{ title: 'Our Products' }, { title: 'Partners' }],
    heroVM: {
      backgroundImageSrc: 'assets/farming.jpg',
    },

    productList: [
      {
        routerLink: [AppRouteSegment.PRODUCT, '1'],
        productItemVM: {
          id: 1,
          title: 'Controller',
          description:
            'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: [AppRouteSegment.PRODUCT, '2'],
        productItemVM: {
          id: 2,
          title: 'RTU',
          description:
            'After hours on the road, they finally reached the scenic overlook, the cars tires crunching on the gravel.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: [AppRouteSegment.PRODUCT, '3'],
        productItemVM: {
          id: 3,
          title: 'Cloud and Mobile',
          description:
            'The classic car show attracted enthusiasts from all over, each vehicle polished to perfection under the bright sun.',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
    partnerList: [
      { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
      { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
      { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
      { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
      { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
    ],
    testimonialList: [
      {
        message: 'This is the best product I have ever used!',
        name: 'John Doe',
        location: 'CEO, Example Company',
      },
      {
        message: 'Amazing service, would highly recommend to anyone.',
        name: 'Jane Smith',
        location: 'Marketing Director, Another Company',
      },
      {
        message: 'A truly outstanding experience, 5 stars!',
        name: 'Emily Johnson',
        location: 'Product Manager, Some Company',
      },
      {
        message: 'This is the best product I have ever used!',
        name: 'John Doe',
        location: 'CEO, Example Company',
      },
      {
        message: 'Amazing service, would highly recommend to anyone.',
        name: 'Jane Smith',
        location: 'Marketing Director, Another Company',
      },
      {
        message: 'A truly outstanding experience, 5 stars!',
        name: 'Emily Johnson',
        location: 'Product Manager, Some Company',
      },
    ],
  });
}
