import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsPageComponent } from './order-details-page.component';
import { enMock } from './order-details-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockAuthStore } from '@stores/auth/auth.testing';
import { Validators } from '@angular/forms';
import {
    provideOrderDetailsPageServiceMock,
    updateVMSignal,
} from './order-details-page.service.mock';
import { OrderDetailsPageVM } from './order-details-page.model';

describe('OrderDetailsPageComponent', () => {
    let fixture: ComponentFixture<OrderDetailsPageComponent>;
    let component: OrderDetailsPageComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrderDetailsPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockAuthStore(),
                provideOrderDetailsPageServiceMock(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrderDetailsPageComponent);
        component = fixture.componentInstance;
    });

    // Unit testing
    it('should set the validators and initial value to the messageControl', () => {
        // Arrange
        const control = component['messageControl'];

        // There is no need to act

        // Assert
        expect(control.value).toBe('');
        expect(control.hasValidator(Validators.required)).toBeTruthy();
    });

    // Unit testing
    it('should set the form to invalid if it is empty', () => {
        // Arrange
        const control = component['messageControl'];
        control.setValue('  ');

        // There is no need to act

        // Assert
        expect(control.invalid).toBeTruthy();
    });

    // Unit testing
    it('should set the form to valid if there is a value', () => {
        // Arrange
        const control = component['messageControl'];
        control.setValue('Hi!');

        // There is no need to act

        // Assert
        expect(control.valid).toBeTruthy();
    });

    // Unit testing
    it('should not send the message if there is no user', () => {
        // Arrange
        const sendMessageSpy = jest.spyOn(component['service'], 'sendMessage');
        const control = component['messageControl'];
        control.setValue('Hi!');

        // Act
        component['sendMessage']();

        // Assert
        expect(sendMessageSpy).not.toHaveBeenCalled();
    });

    // Unit testing
    it('should send the message if the control is invalid', () => {
        // Arrange
        const sendMessageSpy = jest.spyOn(component['service'], 'sendMessage');
        const control = component['messageControl'];
        const resetSpy = jest.spyOn(control, 'reset');

        // Act
        control.setValue('Hi!');
        updateVMSignal(mockVMWithUser);
        component['sendMessage']();

        // Assert
        expect(sendMessageSpy).toHaveBeenCalled();
        expect(resetSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should send the message if the control is valid and there is a user', () => {
        // Arrange
        const sendMessageSpy = jest.spyOn(component['service'], 'sendMessage');
        const control = component['messageControl'];
        const resetSpy = jest.spyOn(control, 'reset');

        // Act
        control.setValue('Hi!');
        updateVMSignal(mockVMWithUser);
        component['sendMessage']();

        // Assert
        expect(sendMessageSpy).toHaveBeenCalled();
        expect(resetSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should not close the order on cancel response', () => {
        // Arrange
        const closeOrderSpy = jest.spyOn(component['service'], 'closeOrder');

        // Act
        component['onCloseOrderDialogResponse']({ type: 'cancel' });

        // Assert
        expect(closeOrderSpy).not.toHaveBeenCalled();
    });

    // Unit testing
    it('should close the order on submit response', () => {
        // Arrange
        const closeOrderSpy = jest.spyOn(component['service'], 'closeOrder');

        // Act
        component['onCloseOrderDialogResponse']({ type: 'submit' });

        // Assert
        expect(closeOrderSpy).toHaveBeenCalled();
    });
});

const mockVMWithUser = {
    user: { name: 'Bence', photoUrl: 'asd', role: 'customer' },
} as OrderDetailsPageVM;
