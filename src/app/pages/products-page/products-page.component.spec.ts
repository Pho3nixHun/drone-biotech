import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
  productsPageVMWithFiveProductItem,
  productsPageVMWithOneProductItem,
  productsPageVMWithoutProductItem,
  productsPageVMWithRoutes,
} from './products-page.mock';
import { provideProductsPageMockService, updateGetVMSignal } from './products-page.service.mock';

describe('ProductsPageComponent', () => {
  let fixture: ComponentFixture<ProductsPageComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductsPageComponent,
        getTranslocoModule({
          langs: { en: {} },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
      providers: [provideProductsPageMockService(), provideRouter([])],
    }).compileComponents();

    updateGetVMSignal(undefined);
    fixture = TestBed.createComponent(ProductsPageComponent);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  //Snapshot test
  it('should not render the template when there is no VM provided', () => {
    //Arrange
    // No need to arrange

    //Act
    //No need to act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should not render <app-product-item> when there is no item provided', () => {
    //Arrange
    updateGetVMSignal(productsPageVMWithoutProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 1 <app-product-item> when 1 item is provided', () => {
    //Arrange
    updateGetVMSignal(productsPageVMWithOneProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should render 5 <app-product-item> when 5 items are provided', () => {
    //Arrange
    updateGetVMSignal(productsPageVMWithFiveProductItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot test
  it('should have the correct routerLinks on product-items', () => {
    // Arrange
    updateGetVMSignal(productsPageVMWithRoutes);

    // Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
