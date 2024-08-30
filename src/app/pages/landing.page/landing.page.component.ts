import { Component, signal } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { LandingComponentVM } from './landing.component.vm';
import { ProductComponent } from '@components/product/product.component';
import { ProductItemComponent } from '@components/product/components/product-item/product-item.component';
import { ProductListComponent } from '@components/product/components/product-list/product-list.component';
import { AppRouteSegment } from 'src/app/app-route-segment';

@Component({
  selector: 'app-landing.page',
  standalone: true,
  imports: [HeroComponent, ProductComponent, ProductItemComponent, ProductListComponent],
  templateUrl: './landing.page.component.html',
})
export class LandingPageComponent {
  vm = signal<LandingComponentVM>({
    heroVM: {
      backgroundImageSrc: 'assets/farming.jpg',
    },
    productListVM: {
      productItems: [
        {
          title: 'Controller',
          description:
            'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
          imageSrc: 'assets/lepke.jpg',
        },
        {
          title: 'RTU',
          description:
            'After hours on the road, they finally reached the scenic overlook, the cars tires crunching on the gravel.',
          imageSrc: 'assets/lepke.jpg',
        },
        {
          title: 'Cloud and Mobile',
          description:
            'The classic car show attracted enthusiasts from all over, each vehicle polished to perfection under the bright sun.',
          imageSrc: 'assets/lepke.jpg',
        },
      ],
      link: AppRouteSegment.PRODUCT,
    },
  });
}
