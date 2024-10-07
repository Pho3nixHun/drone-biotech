import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { PartnerListComponent } from '@components/partner-list/partner-list.component';
import { PartnerLogoComponent } from '@components/partner-list/components/partner-logo/partner-logo.component';
import { TestimonialItemComponent } from '@components/testimonial-item/testimonial-item.component';
import { SwiperModule } from '@modules/swiper/swiper.module';
import { TranslocoModule } from '@jsverse/transloco';
import { LandingPageService } from './landing-page.service';
import {
  ExtendedFrameVM,
  ExtendedFrameVMWithExtendedProductItemVMs,
  ExtendedFrameVMWithPartnersVM,
} from './landing-page-vm.model';

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
  private readonly landingPageService = inject(LandingPageService);

  isProductFrame(frame: ExtendedFrameVM): frame is ExtendedFrameVMWithExtendedProductItemVMs {
    return 'productItemVMs' in frame;
  }

  isPartnerFrame(frame: ExtendedFrameVM): frame is ExtendedFrameVMWithPartnersVM {
    return 'partnersVM' in frame;
  }

  protected vm = this.landingPageService.getVM();
}
