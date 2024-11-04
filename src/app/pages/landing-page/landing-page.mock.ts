import { AppRouteSegment } from 'src/app/app-route-segment';
import { LandingPageVM } from './landing-page-vm.model';
import { Rel } from '@interfaces/with-link.interface';

export const landingPageVMWithoutFrameMock: LandingPageVM = {
  frameXVMs: [],
  heroXVM: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOneFrameMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
  ],
  heroXVM: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithFiveFramesMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithOnlyPartnerFrameMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        {
          imageSrc: 'assets/lepke.jpg',
          altTextKey: 'LandingPage.partners.0.altText',
          link: {
            href: 'https://example.com',
            rel: [Rel.NoOpener, Rel.NoReferrer],
            target: '_blank',
          },
        },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithOnlyProductFrameMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
  ],
  heroXVM: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithoutProductItemMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemXVMs: [],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithOneProductItemMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithFiveProductItemMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
        {
          routerLink: [AppRouteSegment.PRODUCT, '4'],
          id: '4',
          altTextKey: 'LandingPage.products.2.title',
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '5'],
          id: '5',
          altTextKey: 'LandingPage.products.2.title',
          titleKey: 'LandingPage.products.2.title',
          descriptionKey: 'LandingPage.products.2.description',
          imageSrc: 'assets/lepke.jpg',
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithoutPartnerLogoXMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithOnePartnerLogoXMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithFivePartnerLogoXMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMWithoutTestimonialMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [],
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

export const landingPageVMWithOneTestimonialMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
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

export const landingPageVMWithFiveTestimonialMock: LandingPageVM = {
  frameXVMs: [
    {
      id: 'products',
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
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
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

export const landingPageVMMock: LandingPageVM = {
  frameXVMs: [
    {
      id: AppRouteSegment.PRODUCT,
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
      id: AppRouteSegment.PARTNERS,
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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

export const landingPageVMMockWithRoutes = {
  frameXVMs: [
    {
      id: AppRouteSegment.PRODUCT,
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
      id: AppRouteSegment.PARTNERS,
      titleKey: 'LandingPage.frames.1.title',
      partnerLogoXVMs: [
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
        { imageSrc: 'assets/lepke.jpg', altTextKey: 'LandingPage.partners.0.altText' },
      ],
      testimonialItemVMs: [
        {
          messageKey: 'LandingPage.testimonials.0.message',
          name: 'John Doe',
          roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.1.message',
          name: 'Jane Smith',
          roleAndCompanyKey: 'LandingPage.testimonials.1.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.2.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.2.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.3.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.3.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.4.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.4.roleAndCompany',
        },
        {
          messageKey: 'LandingPage.testimonials.5.message',
          name: 'Emily Johnson',
          roleAndCompanyKey: 'LandingPage.testimonials.5.roleAndCompany',
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
