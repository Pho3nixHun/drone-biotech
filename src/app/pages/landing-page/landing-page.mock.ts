import { AppRouteSegment } from 'src/app/app-route-segment';
import { LandingPageVM } from './landing-page-vm.model';

export const landingPageVMWithoutFrameMock: LandingPageVM = {
  extendedFrameVMs: [],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};
export const landingPageVMWithOneFrameMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithFiveFramesMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOnlyPartnerFrameMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOnlyProductFrameMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithoutProductItemMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOneProductItemMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithFiveProductItemMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '4'],
          productItemVM: {
            id: 4,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '5'],
          productItemVM: {
            id: 5,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithoutPartnerLogoMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [],
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOnePartnerLogoMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [{ imageSrc: 'assets/lepke.jpg', altText: 'logo' }],
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithFivePartnerLogoMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithoutTestimonialMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
        ],
        testimonialItemVMs: [],
      },
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithOneTestimonialMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
        ],
        testimonialItemVMs: [
          {
            messageKey: 'LandingPage.testimonials.0.message',
            name: 'John Doe',
            roleAndCompanyKey: 'LandingPage.testimonials.0.roleAndCompany',
          },
        ],
      },
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMWithFiveTestimonialMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: 'products',
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: 'partners',
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};

export const landingPageVMMock: LandingPageVM = {
  extendedFrameVMs: [
    {
      id: AppRouteSegment.PRODUCT,
      titleKey: 'LandingPage.frames.0.title',
      productItemVMs: [
        {
          routerLink: [AppRouteSegment.PRODUCT, '1'],
          productItemVM: {
            id: 1,
            titleKey: 'LandingPage.products.0.title',
            descriptionKey: 'LandingPage.products.0.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '2'],
          productItemVM: {
            id: 2,
            titleKey: 'LandingPage.products.1.title',
            descriptionKey: 'LandingPage.products.1.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
        {
          routerLink: [AppRouteSegment.PRODUCT, '3'],
          productItemVM: {
            id: 3,
            titleKey: 'LandingPage.products.2.title',
            descriptionKey: 'LandingPage.products.2.description',
            imageSrc: 'assets/lepke.jpg',
          },
        },
      ],
    },
    {
      id: AppRouteSegment.PARTNERS,
      titleKey: 'LandingPage.frames.1.title',
      partnersVM: {
        partnerLogoVMs: [
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
          { imageSrc: 'assets/lepke.jpg', altText: 'logo' },
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
    },
  ],
  extendedHeroVMWithTitles: {
    backgroundImageSrc: 'assets/farming.jpg',
    titleKey: 'LandingPage.hero.title',
    descriptionKey: 'LandingPage.hero.description',
    primaryButtonLabelKey: 'LandingPage.hero.primaryButtonLabel',
    secondaryButtonLabelKey: 'LandingPage.hero.secondaryButtonTitleLabel',
  },
};
