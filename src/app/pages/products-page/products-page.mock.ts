import { ProductsPageVM } from './products-page-vm.model';

export const enProductsPageMock = {
    title0: 'title0',
    productAltText0: 'title0',
    productDescription0: 'title1',
    productAltText1: 'title0',
    productDescription1: 'title1',
    productAltText2: 'title0',
    productDescription2: 'title1',
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
                id: '1',
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
                id: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                id: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                id: '3',
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
                id: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                id: '3',
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
                id: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '2',
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                routerLink: '3',
                id: '3',
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
