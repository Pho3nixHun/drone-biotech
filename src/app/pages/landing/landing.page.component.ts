import { Component } from '@angular/core';
import { ContactComponent } from '@components/contact/contact.component';
import { PartnerSectionComponent } from '@components/partner-section/partner-section.component';
import { ProductSectionComponent } from '@components/product-section/product-section.component';
import { HeroComponent } from '@components/hero/hero.component';
import { ScrollIndicatorComponent } from '@components/scroll-indicator/scroll-indicator.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ContactComponent,
    PartnerSectionComponent,
    ProductSectionComponent,
    HeroComponent,
    ScrollIndicatorComponent,
  ],
  templateUrl: './landing.page.component.html',
})
export class LandingPageComponent {}
