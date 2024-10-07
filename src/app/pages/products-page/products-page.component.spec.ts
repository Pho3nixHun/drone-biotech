import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { Router, RouterModule } from '@angular/router';
import { routes } from './products-routing.module';
import { ProductsPageService } from './products-page.service';
import { signal, WritableSignal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';
import {
  productsPageVMWithFiveProductItem,
  productsPageVMWithOneProductItem,
  productsPageVMWithoutProductItem,
  productsPageVMWithRoutes,
} from './products-page.mock';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let compiled: HTMLElement;
  let vmSignal: WritableSignal<ProductsPageVM | undefined>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    const productsPageServiceMock = {
      getVM: jest.fn(),
    };
    vmSignal = signal(undefined);
    productsPageServiceMock.getVM.mockReturnValue(vmSignal);

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        ProductsPageComponent,
        getTranslocoModule({
          langs: { en: {} },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
      providers: [
        {
          provide: ProductsPageService,
          useValue: productsPageServiceMock,
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    router.initialNavigation();
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot test
  it('should not render the template when there is no VM provided', () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should not render <app-product-item> when there is no item provided', () => {
    //Arrange
    vmSignal.set(productsPageVMWithoutProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 <app-product-item> when 1 item is provided', () => {
    //Arrange
    vmSignal.set(productsPageVMWithOneProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 <app-product-item> when 5 items are provided', () => {
    //Arrange
    vmSignal.set(productsPageVMWithFiveProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Interaction test

  it('should initiate navigation when the user clicks on a product to the appropriate link provided by the VM', () => {
    // Arrange
    vmSignal.set(productsPageVMWithRoutes);
    const mockVM =
      productsPageVMWithRoutes.extendedFrameVMWithExtendedProductItemVMs.productItemVMs;

    // Act
    fixture.detectChanges();
    const productItems = compiled.querySelectorAll('app-product-list app-product-item');

    //Assert
    productItems.forEach((productItem, index) => {
      if (mockVM)
        expect(productItem.getAttribute('ng-reflect-router-link')).toBe(
          mockVM[index].routerLink.toString(),
        );
    });
  });
});
