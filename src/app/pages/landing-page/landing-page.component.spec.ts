import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { LandingPageService } from './landing-page.service';
import { signal, WritableSignal } from '@angular/core';
import { LandingPageVM } from './landing-page-vm.model';
import { Router, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import {
  landingPageVMMock,
  landingPageVMWithFiveFramesMock,
  landingPageVMWithFivePartnerLogoMock,
  landingPageVMWithFiveProductItemMock,
  landingPageVMWithFiveTestimonialMock,
  landingPageVMWithOneFrameMock,
  landingPageVMWithOnePartnerLogoMock,
  landingPageVMWithOneProductItemMock,
  landingPageVMWithOneTestimonialMock,
  landingPageVMWithOnlyPartnerFrameMock,
  landingPageVMWithOnlyProductFrameMock,
  landingPageVMWithoutFrameMock,
  landingPageVMWithoutPartnerLogoMock,
  landingPageVMWithoutProductItemMock,
  landingPageVMWithoutTestimonialMock,
} from './landing-page.mock';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { routes } from 'src/app/app.routes';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let compiled: HTMLElement;
  let vmSignal: WritableSignal<LandingPageVM | undefined>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    const landingPageServiceMock = {
      getVM: jest.fn(),
    };
    vmSignal = signal(undefined);
    landingPageServiceMock.getVM.mockReturnValue(vmSignal);

    TestBed.configureTestingModule({
      imports: [
        LandingPageComponent,
        RouterModule.forRoot(routes),
        ProductsPageComponent,
        getTranslocoModule({
          langs: { en: {} },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
      providers: [
        {
          provide: LandingPageService,
          useValue: landingPageServiceMock,
        },
      ],
    }).compileComponents();
    router = TestBed.inject(Router);
    router.initialNavigation();
    fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot test
  it('should not render template without VM', () => {
    // Arrange

    // Act

    // Act

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should not render frames when 0 frame is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithoutFrameMock);

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 frame when 1 frame is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithOneFrameMock);

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 frames in order when 5 frames are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithFiveFramesMock);

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render only product frames when only product frames are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithOnlyProductFrameMock);

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render only partner frames when only partner frames are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithOnlyPartnerFrameMock);

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should not render <app-product-item> when 0 is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithoutProductItemMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 <app-product-item> when 1 is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithOneProductItemMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 <app-product-item> in order when 5 <app-product-item>  are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithFiveProductItemMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Interaction test
  it('should initiate navigation when the user clicks on a product to the appropriate link provided by the VM', async () => {
    // Arrange
    vmSignal.set(landingPageVMMock);
    const navigateSpy = jest.spyOn(router, 'navigateByUrl');
    if (!component.isProductFrame(landingPageVMMock.extendedFrameVMs[0])) {
      return;
    }
    const mockFrame = landingPageVMMock.extendedFrameVMs[0];

    // Act
    fixture.detectChanges();
    const productItems = fixture.debugElement.queryAll(By.css('app-product-list app-product-item'));

    productItems.forEach((productItem, index) => {
      productItem.nativeElement.click();
      let expectedUrl = '';
      const routerLink: string | string[] | undefined = mockFrame.productItemVMs[index].routerLink;

      if (Array.isArray(routerLink)) {
        expectedUrl = `/${routerLink.join('/')}`;
      } else if (typeof routerLink === 'string') {
        expectedUrl = `/${routerLink}`;
      } else {
        expectedUrl = '/';
      }

      // Assert
      expect(router.url).toBe(expectedUrl);
    });

    expect(navigateSpy).toHaveBeenCalledTimes(productItems.length);
  });

  //Snapshot test
  it('should not render <app-partner-logo> when 0 is provided', () => {
    vmSignal.set(landingPageVMWithoutPartnerLogoMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 <app-partner-logo> when 1 is provided', () => {
    vmSignal.set(landingPageVMWithOnePartnerLogoMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 <app-partner-logo> in order when 5 app-partner-logo are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithFivePartnerLogoMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should not render <app-testimonial-item> when 0 is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithoutTestimonialMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 <app-testimonial-item> when 1 is provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithOneTestimonialMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 <app-testimonial-item> in order when 5 app-testimonial-item are provided', () => {
    // Arrange
    vmSignal.set(landingPageVMWithFiveTestimonialMock);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
