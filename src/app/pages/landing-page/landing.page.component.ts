import { Component, inject, signal } from '@angular/core';
import { ContactComponent } from '@components/contact/contact.component';
import { HeroComponent } from '@components/hero/hero.component';
import { ScrollIndicatorComponent } from '@components/scroll-indicator/scroll-indicator.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductSectionComponent } from '@components/product-section/product-section.component';
import { PartnerSectionComponent } from '@components/partner-section/partner-section.component';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { Product } from '@interfaces/product';
import { Partners } from '@interfaces/partners';
import { PartnerListComponent } from '@components/partner-list/partner-list.component';
import { FormBuilder, Validators } from '@angular/forms';
import { PartnerCarouselComponent } from "../../shared/components/partner-carousel/partner-carousel.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ContactComponent,
    HeroComponent,
    ScrollIndicatorComponent,
    ProductItemComponent,
    RouterLink,
    ProductListComponent,
    ProductSectionComponent,
    PartnerSectionComponent,
    PartnerListComponent,
    PartnerCarouselComponent
],
  templateUrl: './landing.page.component.html',
})
export class LandingPageComponent {
  link = AppRouteSegment.PRODUCT;

  products = signal<Product[]>([
    { title: 'Controller', imageSrc: 'assets/lepke.png' },
    { title: 'RTU', imageSrc: 'assets/lepke.png' },
    { title: 'Cloud and Mobile', imageSrc: 'assets/lepke.png' },
  ]);

  partners = signal<Partners[]>([
    { imageSrc: 'assets/lepke.png', altText: 'Lepke' },
    { imageSrc: 'assets/lepke.png', altText: 'Lepke' },
    { imageSrc: 'assets/lepke.png', altText: 'Lepke' },
    { imageSrc: 'assets/lepke.png', altText: 'Lepke' },
  ]);

  private readonly formBuilder = inject(FormBuilder);
  protected readonly contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
    }
  }
}
