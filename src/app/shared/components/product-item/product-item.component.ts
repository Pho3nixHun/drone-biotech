import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() imageSrc!: string;
}
