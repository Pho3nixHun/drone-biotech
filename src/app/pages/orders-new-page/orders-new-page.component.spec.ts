import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from 'transloco-testing.module';
import { enMock, ordersNewPageVMMock } from './orders-new-page.mock';
import { OrdersNewPageComponent } from './orders-new-page.component';
import {
    provideOrdersNewPageMockService,
    updateVMSignal,
} from './orders-new-page.service.mock';
import { Validators } from '@angular/forms';

describe('OrdersNewPageComponent', () => {
    let component: OrdersNewPageComponent;
    let fixture: ComponentFixture<OrdersNewPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrdersNewPageComponent,
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

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange
        updateVMSignal(ordersNewPageVMMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should initialize the form with correct controls and validators', () => {
        // Arrange
        const { contact, endCustomer, internalOrderNumber, missions } =
            component['formGroup'].controls;
        const { email, name, phoneNumber } = contact.controls;

        // There is no need to act

        // Assert
        expect(endCustomer.value).toBe('');
        expect(endCustomer.hasValidator(Validators.required)).toBe(true);

        expect(internalOrderNumber.value).toBe('');
        expect(internalOrderNumber.hasValidator(Validators.required)).toBe(
            true
        );

        expect(missions.value).toStrictEqual([]);
        expect(missions.hasValidator(Validators.required)).toBe(true);

        expect(email.value).toBe('');
        expect(email.hasValidator(Validators.required)).toBe(true);
        expect(email.hasValidator(Validators.email)).toBe(true);

        expect(name.value).toBe('');
        expect(name.hasValidator(Validators.required)).toBe(true);

        expect(phoneNumber.value).toBe('');
        expect(phoneNumber.hasValidator(Validators.required)).toBe(true);
    });

    it('form should be invalid the fields are empty', () => {
        // Assert
        expect(component['formGroup'].invalid).toBe(true);
    });

    it('form should become valid when all required values satisfy conditions', () => {
        // Arrange
        const form = component['formGroup'];
        form.patchValue({
            internalOrderNumber: 'A123',
            contact: {
                name: 'Test Name',
                phoneNumber: '12345678',
                email: 'test@test.com',
            },
            endCustomer: 'Customer Inc',
            missions: [
                {
                    id: 'Id',
                    applicationDate: new Date(1),
                    dosePerHq: 1,
                    entryPoint: { lat: 10, lng: 11 },
                    name: 'Name',
                    targetArea: [],
                    comment: '',
                },
            ],
        });

        // Assert
        expect(form.valid).toBe(true);
    });

    it("'s form should become valid when all required values satisfy conditions", () => {
        // Arrange
        const form = component['formGroup'];
        form.patchValue({
            internalOrderNumber: 'A123',
            contact: {
                name: 'Test Name',
                phoneNumber: '12345678',
                email: 'test@test.com',
            },
            endCustomer: 'Customer Inc',
            missions: [
                {
                    id: 'Id',
                    applicationDate: new Date(1),
                    dosePerHq: 1,
                    entryPoint: { lat: 10, lng: 11 },
                    name: 'Name',
                    targetArea: [],
                    comment: '',
                },
            ],
        });

        // Assert
        expect(form.valid).toBe(true);
    });

    it("'s form should become valid when all required values satisfy conditions", () => {
        // Arrange
        const form = component['formGroup'];
        const resetSpy = jest.spyOn(form, 'reset');

        form.patchValue({
            internalOrderNumber: 'A123',
            contact: {
                name: 'Test Name',
                phoneNumber: '12345678',
                email: 'test@test.com',
            },
            endCustomer: 'Customer Inc',
            missions: [
                {
                    id: 'Id',
                    applicationDate: new Date(1),
                    dosePerHq: 1,
                    entryPoint: { lat: 10, lng: 11 },
                    name: 'Name',
                    targetArea: [],
                    comment: '',
                },
            ],
        });
        component['submitForm']();

        // Assert
        expect(resetSpy).toHaveBeenCalled();
    });

    test("'s submitForm should not reset form if invalid", () => {
        // Arrange
        const form = component['formGroup'];
        const resetSpy = jest.spyOn(form, 'reset');

        form.patchValue({
            internalOrderNumber: '',
            contact: {
                name: '',
                phoneNumber: '',
                email: '',
            },
            endCustomer: '',
            missions: [],
        });

        component['submitForm']();

        // Assert
        expect(resetSpy).not.toHaveBeenCalled();
    });
});
