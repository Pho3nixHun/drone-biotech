import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import { enProductsPageMock, productsPageVMMock } from './products-page.mock';
import {
    provideProductsPageMockService,
    updateGetVMSignal,
} from './products-page.service.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectID } from 'src/app/stores/router/router.selectors';

describe('ProductsPageComponent', () => {
    let fixture: ComponentFixture<ProductsPageComponent>;
    let compiled: HTMLElement;
    let store: MockStore;

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
            providers: [
                provideProductsPageMockService(),
                provideRouter([]),
                provideMockStore(),
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);

        store = TestBed.inject(MockStore);
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
    it('should not render <app-product-item> when the ID is not correct', () => {
        //Arrange
        store.overrideSelector(selectID, 'asd');
        updateGetVMSignal(productsPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the correct <app-product-item> when the correct ID is provided', () => {
        productsPageVMMock.productListFrame.productItemVMs.forEach(
            (element) => {
                //Arrange
                store.overrideSelector(selectID, element.id);
                updateGetVMSignal(productsPageVMMock);

                //Act
                fixture.detectChanges();

                //Assert
                expect(compiled).toMatchSnapshot();
            }
        );
    });
});
