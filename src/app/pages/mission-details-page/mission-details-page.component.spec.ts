import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsPageComponent } from './mission-details-page.component';
import { Validators } from '@angular/forms';
import {
    provideMissionDetailsPageServiceMock,
    updateVMSignal,
} from './mission-details-page.service.mock';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { provideMockAuthStore } from '@stores/auth/auth.testing';
import { getTranslocoModule } from 'transloco-testing.module';

describe('MissionDetailsPageComponent', () => {
    let component: MissionDetailsPageComponent;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MissionDetailsPageComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMissionDetailsPageServiceMock(),
                provideMockAuthStore(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
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
});

const mockVMWithUser = {
    user: { name: 'Bence', photoUrl: 'asd', role: 'customer' },
} as MissionDetailsPageVM;
