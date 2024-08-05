import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductSectionComponent } from "./product-section/product-section.component";
import { PartnerSectionComponent } from "./partner-section/partner-section.component";
import { ContactComponent } from "./contact/contact.component";
import { ScrollIndicatorComponent } from "./scroll-indicator/scroll-indicator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FooterComponent, ProductSectionComponent, PartnerSectionComponent, ContactComponent, ScrollIndicatorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'drone-biotech-webapp';
}
