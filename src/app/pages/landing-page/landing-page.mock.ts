import { AppRouteSegment } from 'src/app/app-route-segment';
import { FrameID, LandingPageVM } from './landing-page-vm.model';

export const enMock = {
    hero: {
        description: 'desc',
        primaryButton: 'primary',
        secondaryButton: 'secondary',
        title: 'tit',
    },
    frame1: {
        title: 'frame1tit',
        product1: {
            altText: '1alt1',
            title: '1tit1',
            description: '1desc1',
        },
        product2: {
            altText: '1alt2',
            title: '1tit2',
            description: '1desc2',
        },
        product3: {
            altText: '1alt3',
            title: '1tit3',
            description: '1desc3',
        },
        product4: {
            altText: '1alt4',
            title: '1tit4',
            description: '1desc4',
        },
        product5: {
            altText: '1alt5',
            title: '1tit5',
            description: '1desc5',
        },
    },
    frame2: {
        title: 'frame2tit',
        partner1: {
            altText: '2frame1partner',
        },
        partner2: {
            altText: '2frame2partner',
        },
        partner3: {
            altText: '2frame3partner',
        },
        partner4: {
            altText: '2frame4partner',
        },
        partner5: {
            altText: '2frame5partner',
        },
        testimonial1: {
            message: '2frame1testimonial',
            roleAndCompany: '2frame1role',
        },
        testimonial2: {
            message: '2frame2testimonial',
            roleAndCompany: '2frame2role',
        },
        testimonial3: {
            message: '2frame3testimonial',
            roleAndCompany: '2frame3role',
        },
        testimonial4: {
            message: '2frame4testimonial',
            roleAndCompany: '2frame4role',
        },
        testimonial5: {
            message: '2frame5testimonial',
            roleAndCompany: '2frame5role',
        },
    },
    frame3: {
        title: 'frame3tit',
    },
    frame4: {
        title: 'frame4tit',
    },
    frame5: {
        title: 'frame5tit',
    },
};
export const landingPageVMDefault: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: 'LandingPage.frames.0.title',
            productItemXVMs: [],
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
        primaryButtonXVM: {
            textKey: 'LandingPage.hero.primaryButtonLabel',
            variant: 'fill',
        },
        secondaryButtonXVM: {
            textKey: 'LandingPage.hero.secondaryButtonTitleLabel',
            variant: 'fill',
            secondary: true,
        },
    },
};

export const mockVM: LandingPageVM = {
    frameXVMs: [],
};

export const mockVMWithoutHero: LandingPageVM = {
    frameXVMs: [],
};

export const mockVMWithHero: LandingPageVM = {
    frameXVMs: [],
    heroXVM: {
        titleKey: enMock.hero.title,
        descriptionKey: enMock.hero.title,
        backgroundImageSrc: 'assets/unknown.jpg',
        primaryButtonXVM: {
            variant: 'fill',
        },
        secondaryButtonXVM: {
            variant: 'fill',
        },
    },
};

export const mockVMWithButtonTextsInHero: LandingPageVM = {
    frameXVMs: [],
    heroXVM: {
        titleKey: enMock.hero.title,
        descriptionKey: enMock.hero.title,
        backgroundImageSrc: 'assets/unknown.jpg',
        primaryButtonXVM: {
            variant: 'fill',
            textKey: enMock.hero.primaryButton,
        },
        secondaryButtonXVM: {
            variant: 'fill',
            textKey: enMock.hero.secondaryButton,
        },
    },
};

export const mockVMWithoutButtonTextsInHero: LandingPageVM = {
    frameXVMs: [],
    heroXVM: {
        titleKey: enMock.hero.title,
        descriptionKey: enMock.hero.title,
        backgroundImageSrc: 'assets/unknown.jpg',
        primaryButtonXVM: {
            variant: 'fill',
        },
        secondaryButtonXVM: {
            variant: 'fill',
        },
    },
};

export const mockVMWithoutFrames: LandingPageVM = {
    frameXVMs: [],
};

export const mockVMWithOneFrame: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: enMock.frame1.title,
            productItemXVMs: [],
        },
    ],
};

export const mockVMWithFiveFrames: LandingPageVM = {
    frameXVMs: [
        {
            id: '1',
            titleKey: enMock.frame1.title,
            productItemXVMs: [],
        },
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [],
        },
        {
            id: '3',
            titleKey: enMock.frame3.title,
            productItemXVMs: [],
        },
        {
            id: '4',
            titleKey: enMock.frame4.title,
            productItemXVMs: [],
        },
        {
            id: '4',
            titleKey: enMock.frame5.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithoutProductItem: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: enMock.frame1.title,
            productItemXVMs: [],
        },
    ],
};

export const mockVMWithOneProductItem: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: enMock.frame1.title,
            productItemXVMs: [
                {
                    id: '1',
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: enMock.frame1.product1.altText,
                    titleKey: enMock.frame1.product1.title,
                    descriptionKey: enMock.frame1.product1.description,
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
};

export const mockVMWithFiveProductItem: LandingPageVM = {
    frameXVMs: [
        {
            id: FrameID.PRODUCTS,
            titleKey: enMock.frame1.title,
            productItemXVMs: [
                {
                    id: '1',
                    routerLink: [AppRouteSegment.PRODUCT, '1'],
                    altTextKey: enMock.frame1.product1.altText,
                    titleKey: enMock.frame1.product1.title,
                    descriptionKey: enMock.frame1.product1.description,
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    id: '2',
                    routerLink: [AppRouteSegment.PRODUCT, '2'],
                    altTextKey: enMock.frame1.product2.altText,
                    titleKey: enMock.frame1.product2.title,
                    descriptionKey: enMock.frame1.product2.description,
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    id: '3',
                    routerLink: [AppRouteSegment.PRODUCT, '3'],
                    altTextKey: enMock.frame1.product3.altText,
                    titleKey: enMock.frame1.product3.title,
                    descriptionKey: enMock.frame1.product3.description,
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    id: '4',
                    routerLink: [AppRouteSegment.PRODUCT, '4'],
                    altTextKey: enMock.frame1.product4.altText,
                    titleKey: enMock.frame1.product4.title,
                    descriptionKey: enMock.frame1.product4.description,
                    imageSrc: 'assets/lepke.jpg',
                },
                {
                    id: '5',
                    routerLink: [AppRouteSegment.PRODUCT, '5'],
                    altTextKey: enMock.frame1.product5.altText,
                    titleKey: enMock.frame1.product5.title,
                    descriptionKey: enMock.frame1.product5.description,
                    imageSrc: 'assets/lepke.jpg',
                },
            ],
        },
    ],
};

export const mockVMWithoutPartnerLogoXVM: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithOnePartnerLogoXVM: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner1.altText,
                },
            ],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithFivePartnerLogoXVM: LandingPageVM = {
    frameXVMs: [
        {
            id: '1',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner1.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner2.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner3.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner4.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner5.altText,
                },
            ],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithFiveMixedPartnerLogoXVM: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner1.altText,
                    link: {
                        href: '',
                    },
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner2.altText,
                    link: {
                        href: '',
                    },
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner3.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner4.altText,
                },
                {
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: enMock.frame2.partner5.altText,
                    link: {
                        href: '',
                    },
                },
            ],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithoutTestimonial: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [],
        },
    ],
};

export const mockVMWithOneTestimonial: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [
                {
                    name: 'John',
                    messageKey: enMock.frame2.testimonial1.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial1.roleAndCompany,
                },
            ],
        },
    ],
};

export const mockVMWithFiveTestimonial: LandingPageVM = {
    frameXVMs: [
        {
            id: '2',
            titleKey: enMock.frame2.title,
            partnerLogoXVMs: [],
            testimonialItemVMs: [
                {
                    name: 'John',
                    messageKey: enMock.frame2.testimonial1.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial1.roleAndCompany,
                },
                {
                    name: 'Doe',
                    messageKey: enMock.frame2.testimonial2.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial2.roleAndCompany,
                },
                {
                    name: 'Elizabeth',
                    messageKey: enMock.frame2.testimonial3.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial3.roleAndCompany,
                },
                {
                    name: 'Swan',
                    messageKey: enMock.frame2.testimonial4.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial4.roleAndCompany,
                },
                {
                    name: 'Depp',
                    messageKey: enMock.frame2.testimonial5.message,
                    roleAndCompanyKey:
                        enMock.frame2.testimonial5.roleAndCompany,
                },
            ],
        },
    ],
};
