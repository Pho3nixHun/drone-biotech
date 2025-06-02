import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogComponent } from './form-dialog.component';
import {
    provideMockDialogDataFactory,
    provideMockDialogRef,
    updateDialogDataSignal,
} from '@providers/dialog-provider';
import { FormDialogVM } from './form-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { Validators } from '@angular/forms';
import { emptyStringValidator } from '@utils/empty-string.validator';

const vm: FormDialogVM = {
    cancelButtonTextKey: 'MissionDetailsPage.formDialog.cancelButtonText',
    submitButtonTextKey: 'MissionDetailsPage.formDialog.submitButtonText',
    titleKey: 'title',
    type: 'formDialogVM',
    confirmTextKey: 'confirm',
    formGroupConfig: [
        {
            abstractControlType: 'control',
            fieldType: 'textarea',
            controlName: 'reason',
            controlLabelKey: 'label',
            initialValue: '',
            validators: [Validators.required, emptyStringValidator],
        },
        {
            abstractControlType: 'control',
            fieldType: 'text',
            controlName: 'text',
            controlLabelKey: 'Text',
            initialValue: '',
            validators: [Validators.required, emptyStringValidator],
        },
    ],
};

describe('FormDialogComponent', () => {
    let fixture: ComponentFixture<FormDialogComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormDialogComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideMockDialogRef(), provideMockDialogDataFactory()],
        }).compileComponents();
    });

    describe('when the vm is not correct', () => {
        beforeEach(() => {
            updateDialogDataSignal({});
            fixture = TestBed.createComponent(FormDialogComponent);
            compiled = fixture.debugElement.nativeElement;
        });
        // Snapshot testing
        it('should not render the content', () => {
            // Arrange

            // Act
            fixture.detectChanges();

            // Assert
            expect(compiled).toMatchSnapshot();
        });
    });

    describe('when the vm is correct', () => {
        beforeEach(() => {
            updateDialogDataSignal(vm);
            fixture = TestBed.createComponent(FormDialogComponent);
            compiled = fixture.debugElement.nativeElement;
        });
        // Unit testing
        it('should render the template correctly', () => {
            // Arrange

            // Act
            fixture.detectChanges();

            // Assert
            expect(compiled).toMatchSnapshot();
        });
    });
});
