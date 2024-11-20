import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { ActivatedRoute } from '@angular/router';
import { enProductsPageMock, productsPageVMMock } from './products-page.mock';
import {
    ACTIVATED_ROUTE_TOKEN,
    provideActivatedRoute,
    provideProductsPageMockService,
    updateGetVMSignal,
    updateRouteSignal,
} from './products-page.service.mock';

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
            providers: [
                provideProductsPageMockService(),
                provideActivatedRoute(),
                { provide: ActivatedRoute, useExisting: ACTIVATED_ROUTE_TOKEN },
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);
        TestBed.inject(ActivatedRoute);
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
    it('should render the template when the VM is provided', () => {
        //Arrange
        updateGetVMSignal(productsPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the correct <app-product-item> based on the current URL', () => {
        //Arrange
        productsPageVMMock.productListFrame.productItemVMs.forEach(
            (element) => {
                updateRouteSignal(element.routerLink);
                updateGetVMSignal(productsPageVMMock);

                //Act
                fixture.detectChanges();

                //Assert
                expect(compiled).toMatchSnapshot();
            }
        );
    });

    //Snapshot test
    it('should not render <app-product-item> if the id is not correct', async () => {
        //Arrange
        updateRouteSignal('route');
        updateGetVMSignal(productsPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
