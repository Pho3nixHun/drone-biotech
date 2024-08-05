import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent {}
