import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    enProductsPageMock,
    productsPageVMMock,
    productsPageVMWithFiveProductItem,
    productsPageVMWithOneProductItem,
} from './products-page.mock';
import {
    provideProductsPageMockService,
    updateGetVMSignal,
} from './products-page.service.mock';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProductsPageComponent', () => {
    let fixture: ComponentFixture<ProductsPageComponent>;
    let compiled: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ProductsPageComponent,
                getTranslocoModule({
                    langs: { enProductsPageMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideProductsPageMockService(), provideMockStore()],
        }).compileComponents();

        updateGetVMSignal(undefined);

        fixture = TestBed.createComponent(ProductsPageComponent);
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
    it('should render the template when the VM is provided', () => {
        //Arrange
        updateGetVMSignal(productsPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-product-item> if 1 items are provided', () => {
        //Arrange
        updateGetVMSignal(productsPageVMWithOneProductItem);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-product-item> if 5 items are provided', () => {
        //Arrange
        updateGetVMSignal(productsPageVMWithFiveProductItem);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
