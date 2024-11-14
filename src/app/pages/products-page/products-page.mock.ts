import { ProductsPageVM } from './products-page-vm.model';

export const enProductsPageMock = {
    title0: '0title',
    productAltText0: '0productAltText0',
    productDescription0: '0productDescription0',
    productAltText1: '1productAltText',
    productDescription1: '1productDescription',
    productAltText2: '1productAltText',
    productDescription2: '2productDescription',
};

export const productsPageVMWithoutProductItem: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [],
    },
};

export const productsPageVMWithOneProductItem: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [
            {
                routerLink: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
        ],
    },
};

export const productsPageVMWithFiveProductItem: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [
            {
                routerLink: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
        ],
    },
};

export const productsPageVMWithRoutes: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [
            {
                routerLink: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
        ],
    },
};
export const productsPageVMMock: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [
            {
                routerLink: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
        ],
    },
};

export const productsPageVMDefault: ProductsPageVM = {
    productListFrame: {
        titleKey: 'LandingPage.frames.0.title',
        productItemVMs: [
            {
                routerLink: '1',
                altTextKey: 'LandingPage.products.0.title',
                titleKey: 'LandingPage.products.0.title',
                descriptionKey: 'LandingPage.products.0.description',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                altTextKey: 'LandingPage.products.1.title',
                titleKey: 'LandingPage.products.1.title',
                descriptionKey: 'LandingPage.products.1.description',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                altTextKey: 'LandingPage.products.2.title',
                titleKey: 'LandingPage.products.2.title',
                descriptionKey: 'LandingPage.products.2.description',
                imageSrc: 'assets/lepke.jpg',
            },
        ],
    },
};
