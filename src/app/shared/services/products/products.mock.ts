import { AppRouteSegment } from 'src/app/app-route-segment';
import { ProductItemXVM } from 'src/app/pages/landing-page/landing-page-vm.model';

export const products: ProductItemXVM[] = [
    {
        id: '1',
        routerLink: [AppRouteSegment.PRODUCT, '1'],
        altTextKey: 'LandingPage.products.0.title',
        titleKey: 'LandingPage.products.0.title',
        descriptionKey: 'LandingPage.products.0.description',
        imageSrc: 'assets/lepke.jpg',
    },
    {
        id: '2',
        routerLink: [AppRouteSegment.PRODUCT, '2'],
        altTextKey: 'LandingPage.products.1.title',
        titleKey: 'LandingPage.products.1.title',
        descriptionKey: 'LandingPage.products.1.description',
        imageSrc: 'assets/lepke.jpg',
    },
    {
        id: '3',
        routerLink: [AppRouteSegment.PRODUCT, '3'],
        altTextKey: 'LandingPage.products.2.title',
        titleKey: 'LandingPage.products.2.title',
        descriptionKey: 'LandingPage.products.2.description',
        imageSrc: 'assets/lepke.jpg',
    },
];
