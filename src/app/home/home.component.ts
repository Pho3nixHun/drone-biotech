import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductSectionComponent } from "../product-section/product-section.component";
import { PartnerSectionComponent } from "../partner-section/partner-section.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FooterComponent, ProductSectionComponent, PartnerSectionComponent, ContactComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
