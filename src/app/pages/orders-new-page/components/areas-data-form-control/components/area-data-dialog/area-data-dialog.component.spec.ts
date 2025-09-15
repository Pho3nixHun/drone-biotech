import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaDataDialogComponent } from './area-data-dialog.component';
import { AreaData, AreaDataDialogVM } from './area-data-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { provideMockMapOptions } from './components/map-form-control/map-form-control.model';
import { provideMockEntryPointMarkerOptions } from './components/map-form-control/components/map-point-select-form-control/map-point-select-form-control.model';
import { provideMapAreaSelectFormControlMockService } from './components/map-form-control/components/map-area-select-form-control/map-area-select-form-control.service.mock';
import { provideMapPointSelectFormControlMockService } from './components/map-form-control/components/map-point-select-form-control/map-point-select-form-control.service.mock';
import {
    provideMockPolygonOptions,
    provideMockInfoWindowOptions,
} from './components/map-form-control/components/map-area-select-form-control/map-area-select-form-control.model';

describe('AreaDataDialogComponent', () => {
    let component: AreaDataDialogComponent;
    let compiled: HTMLElement;
    let fixture: ComponentFixture<AreaDataDialogComponent>;

    beforeEach(async () => {
        HTMLDialogElement.prototype.showModal = jest.fn(function () {
            this.setAttribute('open', '');
        });

        HTMLDialogElement.prototype.close = jest.fn(function () {
            this.removeAttribute('open');
        });
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
                provideMockMapOptions(),
                provideMockHeadOfficeLocation(),
                provideMockPolygonOptions(),
                provideMockInfoWindowOptions(),
                provideMockEntryPointMarkerOptions(),
                provideMapAreaSelectFormControlMockService(),
                provideMapPointSelectFormControlMockService(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AreaDataDialogComponent);
        component = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should be closed', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if it is opened and set the vm after calling the openDialog function', () => {
        // Arrange
        component['openDialog'](mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the max length error assistive text for mission name', () => {
        // Arrange
        component['openDialog'](mockVM);
        component['formGroup'].controls.missionName.setValue(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem veritatis eligendi officiis dolorem est tempora iusto facilis officia quis, non delectus voluptatum ea quisquam voluptatibus quasi amet cumque quibusdam excepturi.'
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the required error assistive text for mission name', () => {
        // Arrange
        component['openDialog'](mockVM);
        const control = component['formGroup'].controls.missionName;
        control.setValue('');
        control.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the min error assistive text for dose per hq', () => {
        // Arrange
        component['openDialog'](mockVM);
        const control = component['formGroup'].controls.dosePerHq;
        control.setValue(-1);
        control.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the required error assistive text for application date', () => {
        // Arrange
        component['openDialog'](mockVM);
        component['formGroup'].controls.applicationDate.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should disable confirm button if form invalid', () => {
        // Arrange
        component['openDialog'](mockVM);
        component['formGroup'].reset();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should enable confirm button if form valid', () => {
        // Arrange
        component['openDialog'](mockVM);
        component['formGroup'].setValue({
            applicationDate: new Date(10),
            comment: 'comment',
            dosePerHq: 10,
            missionName: 'mission',
            map: {
                entryPoint: { lat: 10, lng: 10 },
                targetArea: [
                    { lat: 10, lng: 10 },
                    { lat: 11, lng: 11 },
                    { lat: 12, lng: 12 },
                ],
            },
        });

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the vm/area after calling the openDialog function', () => {
        // Arrange
        component['openDialog'](mockVM, areaData);

        // There is no need to act

        // Assert
        expect(component['vm']()).toStrictEqual(mockVM);
        expect(component['area']()).toStrictEqual(areaData);
    });

    // Unit testing
    it("should set the form's value after calling the openDialog function if area is provided", () => {
        // Arrange
        component['openDialog'](mockVM, areaData);

        //
        fixture.detectChanges();

        // Assert
        const fg = component['formGroup'].controls;
        expect(fg.applicationDate.value).toBe(areaData.applicationDate);
        expect(fg.comment.value).toBe(areaData.comment);
        expect(fg.dosePerHq.value).toBe(areaData.dosePerHq);
        expect(fg.missionName.value).toBe(areaData.missionName);
        //TODO TEST MAP
    });

    // Unit testing
    it('should emit cancel response and close dialog', () => {
        // Arrange
        const responseSpy = jest.spyOn(component['response'], 'emit');
        const dialogSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        component['cancel']();

        // Assert
        expect(responseSpy).toHaveBeenCalledWith({ type: 'cancel' });
        expect(dialogSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should emit submit response with areaData when form valid', () => {
        // Arrange
        component['area'].set(areaData);
        const responseSpy = jest.spyOn(component['response'], 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        fixture.detectChanges();
        component['submitForm']();

        // Assert
        expect(closeSpy).toHaveBeenCalled();
        expect(responseSpy).toHaveBeenCalledWith({
            type: 'submit',
            areaData,
        });
    });

    // Unit testing
    it('should not emit submit if form invalid', () => {
        // Arrange
        const spy = jest.spyOn(component['response'], 'emit');
        component['formGroup'].reset();

        // Act
        component['submitForm']();

        // Assert
        expect(spy).not.toHaveBeenCalled();
    });

    // Unit testing
    it('should reset formGroup when dialog closes', () => {
        // Arrange
        const resetSpy = jest.spyOn(component['formGroup'], 'reset');
        const dialog: HTMLDialogElement =
            fixture.nativeElement.querySelector('dialog');

        // Act
        dialog.dispatchEvent(new Event('close'));

        // Assert
        expect(resetSpy).toHaveBeenCalled();
    });
});

const areaData: AreaData = {
    applicationDate: new Date(),
    comment: 'comment',
    dosePerHq: 10,
    entryPoint: { lat: 10, lng: 10 },
    id: 'id',
    missionName: 'mission name',
    targetArea: [{ lat: 10, lng: 21 }],
};
const enMock = {
    addButtonText: 'add',
    deleteButtonText: 'delete',
    editButtonText: 'edit',
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel',
    closeButtonText: 'close',
    title: 'tit',
    dosePerHqLabel: 'dosePer',
    dosePerHqPlaceholder: 'dosePerPlace',
    missionNameLabel: 'mission',
    missionNamePlaceholder: 'missionPlace',
    commentLabel: 'comment',
    commentPlaceholder: 'commentPlace',
    coordinatesLabel: 'coords',
    coordinatesPlaceholder: 'coordsPlace',
    applicationDateLabel: 'applicationDate',
    applicationDatePlaceholder: 'applicationDatePlace',
    dosePerHqMinErrorAssistiveTextValue: 'dosePerHqMinErrorAssistiveText',
    missionNameMaxCharactersAllowedAssistiveTextValue:
        'missionNameMaxCharactersAllowedAssistiveText',
    missionNameMaxCharactersCounterAssistiveTextValue:
        'missionNameMaxCharactersCounterAssistiveText',
    requiredAssistiveText: 'requiredAssistiveText',
    mapFormControl: {
        mapSearchInputFormControl: {
            placeholder: 'place',
            distanceValue: 'distance',
        },
        mapAreaSelectFormControl: {
            addButtonText: 'addButton',
            deleteButtonText: 'deleteButton',
            editButtonText: 'editButton',
            areaValue: 'area',
        },
    },
};

const mockVM: AreaDataDialogVM = {
    titleKey: enMock.title,
    dosePerHqMinErrorAssistiveTextValueKey:
        enMock.dosePerHqMinErrorAssistiveTextValue,
    missionNameMaxCharactersAllowedAssistiveTextValueKey:
        enMock.missionNameMaxCharactersAllowedAssistiveTextValue,
    missionNameMaxCharactersCounterAssistiveTextValueKey:
        enMock.missionNameMaxCharactersCounterAssistiveTextValue,
    requiredAssistiveTextKey: enMock.requiredAssistiveText,

    dosePerHqInputTextXVM: {
        id: 'id',
        labelKey: enMock.dosePerHqLabel,
        placeholderKey: enMock.dosePerHqPlaceholder,
        readonly: false,
    },
    missionNameInputTextXVM: {
        id: 'id',
        autocomplete: 'email',
        labelKey: enMock.missionNameLabel,
        placeholderKey: enMock.missionNamePlaceholder,
        readonly: false,
        type: 'text',
    },
    commentInputTextareaXVM: {
        id: 'id',
        labelKey: enMock.commentLabel,
        placeholderKey: enMock.commentPlaceholder,
        readonly: false,
    },
    applicationDateInputTextXVM: {
        id: 'id',
        autocomplete: 'off',
        labelKey: enMock.applicationDateLabel,
        placeholderKey: enMock.applicationDatePlaceholder,
        readonly: false,
        type: 'datetime-local',
    },

    closeButtonXVM: {
        textKey: enMock.closeButtonText,
        secondary: false,
        variant: 'fill',
    },
    cancelButtonXVM: {
        textKey: enMock.cancelButtonText,
        secondary: false,
        variant: 'fill',
    },
    confirmButtonXVM: {
        textKey: enMock.confirmButtonText,
        secondary: false,
        variant: 'fill',
    },

    mapFormControlVM: {
        defaultCenter: { lat: 0, lng: 0 },
        mapSearchInputFormControlVM: {
            placeholderKey:
                enMock.mapFormControl.mapSearchInputFormControl.placeholder,
            distanceValueKey:
                enMock.mapFormControl.mapSearchInputFormControl.distanceValue,
        },
        mapAreaSelectFormControlVM: {
            areaValueKey:
                enMock.mapFormControl.mapAreaSelectFormControl.areaValue,
            addButtonXVM: {
                secondary: true,
                variant: 'ghost',
                textKey:
                    enMock.mapFormControl.mapAreaSelectFormControl
                        .addButtonText,
            },
            editButtonXVM: {
                secondary: true,
                variant: 'ghost',
                textKey:
                    enMock.mapFormControl.mapAreaSelectFormControl
                        .editButtonText,
            },
            deleteButtonXVM: {
                secondary: true,
                variant: 'ghost',
                textKey:
                    enMock.mapFormControl.mapAreaSelectFormControl
                        .deleteButtonText,
            },
            coordinatesInputTextareaXVM: {
                id: 'id',
                placeholderKey: enMock.coordinatesPlaceholder,
                labelKey: enMock.coordinatesLabel,
                readonly: false,
            },
        },
        mapPointSelectFormControlVM: {
            addButtonXVM: {
                secondary: true,
                variant: 'ghost',
                textKey: enMock.addButtonText,
            },
            deleteButtonXVM: {
                secondary: true,
                variant: 'ghost',
                textKey: enMock.deleteButtonText,
            },
        },
    },
};
