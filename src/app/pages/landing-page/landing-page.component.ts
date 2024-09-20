import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { PartnerListComponent } from '@components/partner-list/partner-list.component';
import { PartnerLogoComponent } from '@components/partner-list/components/partner-logo/partner-logo.component';
import { TestimonialItemComponent } from '@components/testimonial-item/testimonial-item.component';
import { SwiperModule } from '@modules/swiper/swiper.module';
import { LandingPageVM } from './landing-page-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

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
    SwiperModule,
    TranslocoModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  vm = signal<LandingPageVM>({
    frameVMs: [
      { id: 'products', titleKey: 'LandingPage.frames.0.title' },
      { id: 'partners', titleKey: 'LandingPage.frames.1.title' },
    ],
    heroVM: {
      backgroundImageSrc: 'assets/farming.jpg',
      titles: ['LandingPage.hero.0.title', 'LandingPage.hero.1.title'],
      buttonTitles: ['LandingPage.hero.0.buttonTitle', 'LandingPage.hero.1.buttonTitle'],
    },

    productList: [
      {
        routerLink: [AppRouteSegment.PRODUCT, '1'],
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: [AppRouteSegment.PRODUCT, '2'],
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: [AppRouteSegment.PRODUCT, '3'],
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
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
        messageKey: 'LandingPage.testimonials.0.message',
        name: 'John Doe',
        roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
      },
      {
        messageKey: 'LandingPage.testimonials.1.message',
        name: 'Jane Smith',
        roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
      },
      {
        messageKey: 'LandingPage.testimonials.2.message',
        name: 'Emily Johnson',
        roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
      },
      {
        messageKey: 'LandingPage.testimonials.3.message',
        name: 'Emily Johnson',
        roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
      },
      {
        messageKey: 'LandingPage.testimonials.4.message',
        name: 'Emily Johnson',
        roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
      },
      {
        messageKey: 'LandingPage.testimonials.5.message',
        name: 'Emily Johnson',
        roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
      },
    ],
  });
}
