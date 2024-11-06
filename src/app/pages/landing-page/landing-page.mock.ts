import { AppRouteSegment } from 'src/app/app-route-segment';
import { FrameID, LandingPageVM } from './landing-page-vm.model';
import { Rel } from '@interfaces/with-link.interface';
export const enLandingMock = {
    framesTitle: 'framesTitle',
    productItemAltText: 'altText',
    productItemTitle: 'altText',
    productItemDescription: 'altText',
    partnerLogoAltText: 'logoAltText',
    testimonialMessage: 'testimonialMessage',
    testimonialRoleAndCompany: 'testimonialRoleAndCompany',
    heroTitle: 'heroTitle',
    heroDescription: 'heroDescription',
    heroPrimaryButtonLabel: 'heroPrimaryButtonLabel',
    heroSecondaryButtonLabel: 'heroSecondaryButtonLabel',
};

export const landingPageVMWithoutFrameMock: LandingPageVM = {
    frameXVMs: [],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithoutHeroXVM: LandingPageVM = {
    frameXVMs: [
        {
            id: AppRouteSegment.PRODUCT,
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: AppRouteSegment.PARTNERS,
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
};

export const landingPageVMWithOneFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithFiveFramesMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithOnlyPartnerFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                    link: {
                        href: 'https://example.com',
                        rel: [Rel.NoOpener, Rel.NoReferrer],
                        target: '_blank',
                    },
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithOnlyProductFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithoutProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithOneProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithFiveProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '4'],
                    id: '4',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '5'],
                    id: '5',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithoutPartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithOnePartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithFivePartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithoutTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithOneTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMWithFiveTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: 'products',
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: 'partners',
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMMockWithRoutes = {
    frameXVMs: [
        {
            id: AppRouteSegment.PRODUCT,
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: AppRouteSegment.PARTNERS,
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};
export const landingPageVMMock = {
    frameXVMs: [
        {
            id: AppRouteSegment.PRODUCT,
            titleKey: 'framesTitle',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'productItemAltText',
                    titleKey: 'productItemAltText',
                    descriptionKey: 'productItemDescription',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: AppRouteSegment.PARTNERS,
            titleKey: 'framesTitle',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'partnerLogoAltText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'testimonialMessage',
                    name: 'John Doe',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
                {
                    messageKey: 'testimonialMessage',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'testimonialRoleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'heroTitle',
        descriptionKey: 'heroDescription',
        primaryButtonLabelKey: 'heroPrimaryButtonLabel',
        secondaryButtonLabelKey: 'heroSecondaryButtonLabel',
    },
};

export const landingPageVMDefault: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCT,
            titleKey: 'LandingPage.frames.0.title',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    id: '1',
                    altTextKey: 'LandingPage.products.0.title',
                    titleKey: 'LandingPage.products.0.title',
                    descriptionKey: 'LandingPage.products.0.description',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    id: '2',
                    altTextKey: 'LandingPage.products.1.title',
                    titleKey: 'LandingPage.products.1.title',
                    descriptionKey: 'LandingPage.products.1.description',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    id: '3',
                    altTextKey: 'LandingPage.products.2.title',
                    titleKey: 'LandingPage.products.2.title',
                    descriptionKey: 'LandingPage.products.2.description',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'LandingPage.frames.1.title',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'LandingPage.partners.0.altText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'LandingPage.partners.0.altText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'LandingPage.partners.0.altText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'LandingPage.partners.0.altText',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'LandingPage.partners.0.altText',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'LandingPage.testimonials.0.message',
                    name: 'John Doe',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.0.roleAndCompany',
                },
                {
                    messageKey: 'LandingPage.testimonials.1.message',
                    name: 'Jane Smith',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.1.roleAndCompany',
                },
                {
                    messageKey: 'LandingPage.testimonials.2.message',
                    name: 'Emily Johnson',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.2.roleAndCompany',
                },
                {
                    messageKey: 'LandingPage.testimonials.3.message',
                    name: 'Emily Johnson',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.3.roleAndCompany',
                },
                {
                    messageKey: 'LandingPage.testimonials.4.message',
                    name: 'Emily Johnson',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.4.roleAndCompany',
                },
                {
                    messageKey: 'LandingPage.testimonials.5.message',
                    name: 'Emily Johnson',
                    roleAndCompanyKey:
                        'LandingPage.testimonials.5.roleAndCompany',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'LandingPage.hero.title',
        descriptionKey: 'LandingPage.hero.description',
        primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
        secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
    },
};
