import { ProductsPageVM } from './products-page-vm.model';

export const productsPageVMWithoutProductItem: ProductsPageVM = {
  extendedFrameVMWithExtendedProductItemVMs: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [],
  },
};

export const productsPageVMWithOneProductItem: ProductsPageVM = {
  extendedFrameVMWithExtendedProductItemVMs: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  },
};

export const productsPageVMWithFiveProductItem: ProductsPageVM = {
  extendedFrameVMWithExtendedProductItemVMs: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  },
};

export const productsPageVM: ProductsPageVM = {
  extendedFrameVMWithExtendedProductItemVMs: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  },
};

export const productsPageVMWithRoutes: ProductsPageVM = {
  extendedFrameVMWithExtendedProductItemVMs: {
    titleKey: 'LandingPage.frames.0.title',
    productItemVMs: [
      {
        routerLink: '1',
        productItemVM: {
          id: 1,
          titleKey: 'LandingPage.products.0.title',
          descriptionKey: 'LandingPage.products.0.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '2',
        productItemVM: {
          id: 2,
          titleKey: 'LandingPage.products.1.title',
          descriptionKey: 'LandingPage.products.1.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
      {
        routerLink: '3',
        productItemVM: {
          id: 3,
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      },
    ],
  },
};
