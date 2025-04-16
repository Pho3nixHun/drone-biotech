import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaDataDialogComponent } from './area-data-dialog.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockEntryPointMarkerOptions } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { provideMockDialogService } from '@services/dialog/dialog.service.mock';
import { DIALOG_REF, DialogRef } from '@services/dialog/dialog.service';
import {
    provideMockDialogDataFactory,
    provideMockDialogRef,
    updateDialogDataSignal,
} from 'src/app/shared/providers/dialog-provider';
import {
    provideMockMapOptions,
    provideMockPolygonOptions,
} from './components/map-area-select-form-control/map-area-select-form-control.model';
import {
    enMock,
    mockVMWithAreaData,
    mockVMWithoutAreaData,
} from './area-data-dialog.component.mock';

describe('AreaDataDialogComponent', () => {
    let fixture: ComponentFixture<AreaDataDialogComponent>;
    let compiled: HTMLElement;
    let component: AreaDataDialogComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AreaDataDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockDialogRef(),
                provideMockDialogDataFactory(),
                provideMockHeadOfficeLocation(),
                provideMockMapOptions(),
                provideMockPolygonOptions(),
                provideMockEntryPointMarkerOptions(),
                provideMockDialogService(),
            ],
        }).compileComponents();
    });

    describe('when the vm is not correct', () => {
        beforeEach(() => {
            updateDialogDataSignal({});
            fixture = TestBed.createComponent(AreaDataDialogComponent);
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

    describe('when the vm is correct with areaData', () => {
        beforeEach(() => {
            updateDialogDataSignal(mockVMWithAreaData);
            fixture = TestBed.createComponent(AreaDataDialogComponent);
            component = fixture.componentInstance;
        });
        // Unit testing
        it('should set the value of the form to the value that is in the VM', () => {
            // Arrange

            // Act
            const value = component.areaDataFormGroup.getRawValue();
            const { applicationDate, dosePerHq, entryPoint, targetArea } =
                value;

            // Assert
            expect(applicationDate).toStrictEqual(new Date(10));
            expect(dosePerHq).toBe(1);
            expect(entryPoint).toStrictEqual({ lat: 10, lng: 10 });
            expect(targetArea).toStrictEqual([{ lat: 10, lng: 10 }]);
        });
    });

    describe('when the vm is correct without areaData', () => {
        let dialogRef: DialogRef<unknown>;
        beforeEach(() => {
            updateDialogDataSignal(mockVMWithoutAreaData);
            fixture = TestBed.createComponent(AreaDataDialogComponent);
            dialogRef = TestBed.inject(DIALOG_REF);
            compiled = fixture.debugElement.nativeElement;
            component = fixture.componentInstance;
        });

        // Snapshot testing
        it('should render the content if the correct vm is provided', () => {
            // Arrange

            // Act
            fixture.detectChanges();

            // Assert
            expect(compiled).toMatchSnapshot();
        });

        it('should set the value of the form to null if the areaData is null in the VM', () => {
            // Arrange

            // Act
            const value = component.areaDataFormGroup.getRawValue();
            const { applicationDate, dosePerHq, entryPoint, targetArea } =
                value;

            // Assert
            expect(applicationDate).toBe(null);
            expect(dosePerHq).toBe(null);
            expect(entryPoint).toBe(null);
            expect(targetArea).toBe(null);
        });

        // Unit testing
        it('should reset the form and close the dialog when the resetFormWithCloseDialog() method is called', () => {
            // Arrange
            const closeSpy = jest.spyOn(dialogRef, 'close');
            const resetSpy = jest.spyOn(component.areaDataFormGroup, 'reset');

            // Act
            component['resetFormWithCloseDialog']();

            // Assert
            expect(closeSpy).toHaveBeenCalled();
            expect(resetSpy).toHaveBeenCalled();
        });

        // Unit testing
        it('should reset the form and close the dialog when the submitForm() method is called if the form is valid', () => {
            // Arrange
            component.areaDataFormGroup.setValue({
                applicationDate: new Date(),
                dosePerHq: 10,
                entryPoint: { lat: 10, lng: 10 },
                targetArea: [
                    { lat: 10, lng: 10 },
                    { lat: 20, lng: 20 },
                    { lat: 30, lng: 30 },
                ],
            });
            const closeSpy = jest.spyOn(dialogRef, 'close');
            const resetSpy = jest.spyOn(component.areaDataFormGroup, 'reset');

            // Act
            component['submitForm']();

            // Assert
            expect(closeSpy).toHaveBeenCalledTimes(1);
            expect(resetSpy).toHaveBeenCalledTimes(1);
        });

        // Unit testing
        it('should not close the dialog when the submitForm() method is called if the form is invalid', () => {
            // Arrange
            const closeSpy = jest.spyOn(dialogRef, 'close');

            // Act
            component['submitForm']();

            // Assert
            expect(closeSpy).toHaveBeenCalledTimes(0);
        });
    });
});
