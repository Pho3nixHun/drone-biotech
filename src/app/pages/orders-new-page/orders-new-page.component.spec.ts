import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from 'transloco-testing.module';
import { enMock, ordersNewPageVMMock } from './orders-new-page.mock';
import { OrdersNewPageComponent } from './orders-new-page.component';
import {
    provideOrdersNewPageMockService,
    updateVMSignal,
} from './orders-new-page.service.mock';
import { LocationStoreMockModule } from 'src/app/stores/location/location.module';

describe('OrdersNewPageComponent', () => {
    let component: OrdersNewPageComponent;
    let fixture: ComponentFixture<OrdersNewPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrdersNewPageComponent,
                LocationStoreMockModule,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideOrdersNewPageMockService()],
        }).compileComponents();

        fixture = TestBed.createComponent(OrdersNewPageComponent);
        compiled = fixture.debugElement.nativeElement;
        component = fixture.componentInstance;
    });

    //Snapshot testing
    it('should not render the template when the VM is not provided', () => {
        //Arrange
        updateVMSignal(undefined);
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot testing
    it('should render the template when the VM is provided', () => {
        //Arrange
        updateVMSignal(ordersNewPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should set the areasDataFormGroup to invalid if there is no value in the form', () => {
        // Arrange

        // Act

        // Assert
        expect(component.areasDataFormGroup.touched).toBe(false);
        expect(component.areasDataFormGroup.invalid).toBe(true);
    });

    it('should set the areasDataFormGroup to valid if the form is fulfilled with correct values', () => {
        //Arrange

        //Act
        component.areasDataFormGroup.setValue({
            areasData: [
                {
                    applicationDate: new Date(),
                    dosePerHq: 10,
                    entryPoint: { lat: 10, lng: 10 },
                    id: 10,
                    targetArea: [
                        { lat: 10, lng: 10 },
                        { lat: 20, lng: 20 },
                        { lat: 30, lng: 30 },
                    ],
                },
            ],
            contact: {
                email: 'test@gmail.com',
                name: 'Joe',
                phoneNumber: '06301111111',
            },
            endCustomer: 'customer',
            internalOrderNumber: 'number',
        });

        // Assert
        expect(component.areasDataFormGroup.valid).toBe(true);
    });
});
