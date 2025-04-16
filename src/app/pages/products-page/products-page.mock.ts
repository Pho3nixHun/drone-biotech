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

export const productsPageVMWithOneProductItem: ProductsPageVM = {
    productListFrame: {
        titleKey: 'title0',
        productItemVMs: [
            {
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
                id: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                id: '3',
                altTextKey: 'productAltText2',
                titleKey: 'productAltText2',
                descriptionKey: 'productDescription2',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                id: '4',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                id: '5',
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
                id: '1',
                altTextKey: 'productAltText0',
                titleKey: 'productAltText0',
                descriptionKey: 'productDescription0',
                imageSrc: 'assets/lepke.jpg',
            },
            {
                id: '2',
                altTextKey: 'productAltText1',
                titleKey: 'productAltText1',
                descriptionKey: 'productDescription1',
                imageSrc: 'assets/lepke.jpg',
            },
            {
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
        productItemVMs: [],
    },
};
