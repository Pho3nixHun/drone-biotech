import { Component } from '@angular/core';
import { FrameComponent } from '../../shared/components/frame/frame.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [FrameComponent],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {}
