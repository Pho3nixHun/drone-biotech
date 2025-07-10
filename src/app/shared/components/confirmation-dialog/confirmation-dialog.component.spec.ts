import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import {
    provideMockDialogDataFactory,
    provideMockDialogRef,
    updateDialogDataSignal,
} from '../../providers/dialog-provider';
import { ConfirmationDialogVM } from './confirmation-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { DIALOG_REF, DialogRef } from '@services/dialog/dialog.service';

const enMock = {
    title: 'tit',
    cancelButtonText: 'cancelButton',
    confirmButtonText: 'confirmButton',
    confirmText: 'confirm',
};

const vm: ConfirmationDialogVM = {
    type: 'confirmationDialogVM',
    titleKey: enMock.title,
    cancelButtonTextKey: enMock.cancelButtonText,
    confirmButtonTextKey: enMock.confirmButtonText,
    confirmTextKey: enMock.confirmText,
};

describe('ConfirmationDialogComponent', () => {
    let fixture: ComponentFixture<ConfirmationDialogComponent>;
    let compiled: HTMLElement;
    let component: ConfirmationDialogComponent;
    let dialogRef: DialogRef<unknown>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ConfirmationDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideMockDialogRef(), provideMockDialogDataFactory()],
        }).compileComponents();
        dialogRef = TestBed.inject(DIALOG_REF);
    });

    // Snapshot testing
    it('should not render the template if not the correct vm is provided', () => {
        // Arrange
        updateDialogDataSignal({});
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template if the correct vm is provided', () => {
        // Arrange
        updateDialogDataSignal(vm);
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should close the dialog with the cancel reason when onCancelClick function is called', () => {
        // Arrange
        updateDialogDataSignal(vm);
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        component = fixture.componentInstance;
        const spy = jest.spyOn(dialogRef, 'close');

        // Act
        component['onCancelClick']();

        //Assert
        expect(spy).toHaveBeenCalledWith({ reasonType: 'cancel' });
    });

    // Unit testing
    it('should close the dialog with the submit reason when onConfirmClick function is called', () => {
        // Arrange
        updateDialogDataSignal(vm);
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        component = fixture.componentInstance;
        const spy = jest.spyOn(dialogRef, 'close');

        // Act
        component['onConfirmClick']();

        //Assert
        expect(spy).toHaveBeenCalledWith({ reasonType: 'submit' });
    });
});
