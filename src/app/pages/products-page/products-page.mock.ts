import { ProductsPageVM } from './products-page-vm.model';

export const productsPageVMWithoutProductItem: ProductsPageVM = {
  productListFrame: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [],
  },
};

export const productsPageVMWithOneProductItem: ProductsPageVM = {
  productListFrame: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        id: '1',
        altTextKey: 'LandingPage.products.0.title',
        titleKey: 'LandingPage.products.0.title',
        descriptionKey: 'LandingPage.products.0.description',
        imageSrc: 'assets/lepke.jpg',
      },
    ],
  },
};

export const productsPageVMWithFiveProductItem: ProductsPageVM = {
  productListFrame: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        id: '1',
        altTextKey: 'LandingPage.products.0.title',
        titleKey: 'LandingPage.products.0.title',
        descriptionKey: 'LandingPage.products.0.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '2',
        id: '2',
        altTextKey: 'LandingPage.products.1.title',
        titleKey: 'LandingPage.products.1.title',
        descriptionKey: 'LandingPage.products.1.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '3',
        id: '3',
        altTextKey: 'LandingPage.products.2.title',
        titleKey: 'LandingPage.products.2.title',
        descriptionKey: 'LandingPage.products.2.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '2',
        id: '2',
        altTextKey: 'LandingPage.products.1.title',
        titleKey: 'LandingPage.products.1.title',
        descriptionKey: 'LandingPage.products.1.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '3',
        id: '3',
        altTextKey: 'LandingPage.products.2.title',
        titleKey: 'LandingPage.products.2.title',
        descriptionKey: 'LandingPage.products.2.description',
        imageSrc: 'assets/lepke.jpg',
      },
    ],
  },
};

export const productsPageVM: ProductsPageVM = {
  productListFrame: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        id: '1',
        altTextKey: 'LandingPage.products.0.title',
        titleKey: 'LandingPage.products.0.title',
        descriptionKey: 'LandingPage.products.0.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '2',
        id: '2',
        altTextKey: 'LandingPage.products.1.title',
        titleKey: 'LandingPage.products.1.title',
        descriptionKey: 'LandingPage.products.1.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '3',
        id: '3',
        altTextKey: 'LandingPage.products.2.title',
        titleKey: 'LandingPage.products.2.title',
        descriptionKey: 'LandingPage.products.2.description',
        imageSrc: 'assets/lepke.jpg',
      },
    ],
  },
};

export const productsPageVMWithRoutes: ProductsPageVM = {
  productListFrame: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        id: '1',
        altTextKey: 'LandingPage.products.0.title',
        titleKey: 'LandingPage.products.0.title',
        descriptionKey: 'LandingPage.products.0.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '2',
        id: '2',
        altTextKey: 'LandingPage.products.1.title',
        titleKey: 'LandingPage.products.1.title',
        descriptionKey: 'LandingPage.products.1.description',
        imageSrc: 'assets/lepke.jpg',
      },
      {
        routerLink: '3',
        id: '3',
        altTextKey: 'LandingPage.products.2.title',
        titleKey: 'LandingPage.products.2.title',
        descriptionKey: 'LandingPage.products.2.description',
        imageSrc: 'assets/lepke.jpg',
      },
    ],
  },
};
