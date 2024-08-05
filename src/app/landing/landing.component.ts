import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { PartnerSectionComponent } from "../partner-section/partner-section.component";
import { ProductSectionComponent } from "../product-section/product-section.component";
import { HeroComponent } from "../hero/hero.component";
import { ScrollIndicatorComponent } from "../scroll-indicator/scroll-indicator.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ContactComponent, PartnerSectionComponent, ProductSectionComponent, HeroComponent, ScrollIndicatorComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
