import { AppRouteSegment } from 'src/app/app-route-segment';
import { FrameID, LandingPageVM } from './landing-page-vm.model';
import { FrameID, LandingPageVM } from './landing-page-vm.model';

export const enLandingMock = {
    message0: '0message',
    message1: '1message',
    message2: '2message',
    message3: '3message',
    message4: '4message',
    message5: '5message',
    role0: '0role',
    role1: '1role',
    role2: '2role',
    role3: '3role',
    role4: '4role',
    role5: '5role',
    prodtit0: '0prodtit',
    prodtit1: '1prodtit',
    prodtit2: '2prodtit',
    proddesc0: '0proddesc',
    proddesc1: '1proddesc',
    proddesc2: '2proddesc',
    frame0: '0frame',
    frame1: '1frame',
    herotit: 'herotit0',
    herodesc: 'herodesc0',
    heroprim: 'heroprim0',
    herosec: 'herosec0',
    part0: '0part',
    part1: '1part',
    part2: '2part',
    part3: '3part',
    part4: '4part',
};
export const landingPageVMDefault: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'LandingPage.frames.0.title',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'LandingPage.products.0.title',
                    titleKey: 'LandingPage.products.0.title',
                    descriptionKey: 'LandingPage.products.0.description',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'LandingPage.products.1.title',
                    titleKey: 'LandingPage.products.1.title',
                    descriptionKey: 'LandingPage.products.1.description',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
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
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
};

export const landingPageVMWithOneFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithFiveFramesMock: LandingPageVM = {
    frameXVMs: [
        {
            id: '0',
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: '1',
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
        {
            id: '2',
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: '3',
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: '4',
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithOnlyPartnerFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithOnlyProductFrameMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithoutProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithOneProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithFiveProductItemMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },

                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '4'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '5'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithoutPartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithOnePartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithFivePartnerLogoXMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithoutTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithOneTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMWithFiveTestimonialMock: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};

export const landingPageVMMockWithRoutes = {
export const landingPageVMMockWithRoutes = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};
export const landingPageVMMock = {
export const landingPageVMMock = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'frame0',
            productItemXVMs: [
                {
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: 'prodtit0',
                    titleKey: 'prodtit0',
                    descriptionKey: 'proddesc0',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: 'prodtit1',
                    titleKey: 'prodtit1',
                    descriptionKey: 'proddesc1',
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: 'prodtit2',
                    titleKey: 'prodtit2',
                    descriptionKey: 'proddesc2',
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
        {
            id: FrameID.PARTNERS,
            titleKey: 'frame1',
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part0',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part1',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part2',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part3',
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'part4',
                },
            ],
            testimonialItemVMs: [
                {
                    messageKey: 'message0',
                    name: 'John Doe',
                    roleAndCompanyKey: 'role0',
                },
                {
                    messageKey: 'message1',
                    name: 'Jane Smith',
                    roleAndCompanyKey: 'role1',
                },
                {
                    messageKey: 'message2',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role2',
                },
                {
                    messageKey: 'message3',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role3',
                },
                {
                    messageKey: 'message4',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role4',
                },
                {
                    messageKey: 'message5',
                    name: 'Emily Johnson',
                    roleAndCompanyKey: 'role5',
                },
            ],
        },
    ],
    heroXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'herotit',
        descriptionKey: 'herodesc',
        primaryButtonLabelKey: 'heroprim',
        secondaryButtonLabelKey: 'herosec',
    },
};
