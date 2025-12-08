import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaDataDialogComponent } from './area-data-dialog.component';
import { AreaDataDialogVM, Mission, TabItemID } from './area-data-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { provideMockGmpMapOptions } from '@components/gmp-map/gmp-map.model';
import { provideMockGmpPolygonOptions } from '@tokens/gmp-polygon-options.token';
import { PolygonColor } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { provideMockGmpPlaceAutocompleteOptions } from '@directives/gmp-place-autocomplete/gmp-place-autocomplete.directive';
import { MatIcon } from '@interfaces/mat-icon.enum';

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
                provideMockGmpMapOptions(),
                provideMockHeadOfficeLocation(),
                provideMockGmpPolygonOptions(),
                provideMockGmpPlaceAutocompleteOptions(),
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
    it('should render the template correctly if it is opened and set the vm after calling the open function', () => {
        // Arrange
        component['open'](mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the max length error assistive text for mission name', () => {
        // Arrange
        component['open'](mockVM);
        component['formGroup'].controls.name.setValue(
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
        component['open'](mockVM);
        const control = component['formGroup'].controls.name;
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
        component['open'](mockVM);
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
        component['open'](mockVM);
        component['formGroup'].controls.applicationDate.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should disable confirm button if form invalid', () => {
        // Arrange
        component['open'](mockVM);
        component['formGroup'].reset();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should enable confirm button if form valid', () => {
        // Arrange
        component['open'](mockVM);
        component['formGroup'].setValue({
            applicationDate: new Date(10),
            comment: 'comment',
            dosePerHq: 10,
            name: 'mission',
            entryPoint: { lat: 10, lng: 10 },
            targetArea: [
                { lat: 10, lng: 10 },
                { lat: 11, lng: 11 },
                { lat: 12, lng: 12 },
            ],
        });

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the vm/area after calling the open function', () => {
        // Arrange
        component['open'](mockVM, areaData);

        // There is no need to act

        // Assert
        expect(component['vm']()).toStrictEqual(mockVM);
        expect(component['area']()).toStrictEqual(areaData);
    });

    // Unit testing
    it("should set the form's value after calling the open function if area is provided", () => {
        // Arrange
        component['open'](mockVM, areaData);

        //
        fixture.detectChanges();

        // Assert
        const fg = component['formGroup'].controls;
        expect(fg.applicationDate.value).toBe(areaData.applicationDate);
        expect(fg.comment.value).toBe(areaData.comment);
        expect(fg.dosePerHq.value).toBe(areaData.dosePerHq);
        expect(fg.name.value).toBe(areaData.name);
        //TODO TEST MAP
    });

    // Unit testing
    it('should emit submit response with areaData when form valid', () => {
        // Arrange
        component['open'](mockVM, areaData);
        fixture.detectChanges();
        const responseSpy = jest.spyOn(component['response'], 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        component['submit']();

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
        component['submit']();

        // Assert
        expect(spy).not.toHaveBeenCalled();
    });
});

const areaData: Mission = {
    applicationDate: new Date(),
    comment: 'comment',
    dosePerHq: 10,
    entryPoint: { lat: 10, lng: 10 },
    id: 'id',
    name: 'mission name',
    targetArea: [
        { lat: 10, lng: 21 },
        { lat: 12, lng: 23 },
        { lat: 14, lng: 25 },
    ],
};
const enMock = {
    addButtonText: 'add',
    deleteButtonText: 'delete',
    editButtonText: 'edit',
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel',
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
    addTitleKey: enMock.title,
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
        icon: MatIcon.CLOSE,
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

    editTitleKey: enMock.title,
    actualPosition: null,
    mapTabsXVM: {
        orientation: 'horizontal',
        variant: 'primary',
        visualTabItemVM: {
            id: TabItemID.COORDINATES,
            tabButtonXVM: { textKey: enMock.addButtonText },
            content: {
                addAdvancedMarkerButtonXVM: {
                    variant: 'fill',
                    icon: MatIcon.ADD,
                },
                addPolygonButtonXVM: { variant: 'fill', icon: MatIcon.ADD },
                contentValueKey: '',
                polygonColors: {
                    fillColor: PolygonColor.BLUE,
                    strokeColor: PolygonColor.BLUE,
                },
                polygonContextMenuVM: {
                    closeButtonXVM: { variant: 'fill', icon: MatIcon.ADD },
                    removePolygonButtonXVM: {
                        variant: 'fill',
                        textKey: enMock.deleteButtonText,
                    },
                    removeVertexButtonXVM: {
                        variant: 'fill',
                        textKey: enMock.deleteButtonText,
                    },
                },
                removeAdvancedMarkerButtonXVM: {
                    variant: 'fill',
                    icon: MatIcon.ADD,
                },
            },
        },
        textTabItemVM: {
            content: {
                entryPointInputTextXVM: {
                    id: '',
                    autocomplete: 'current-password',
                    placeholderKey: '',
                    readonly: false,
                    type: 'datetime-local',
                },
                entryPointInvalidTextKey: '',
                targetAreaInputTextareaXVM: {
                    id: '',
                    labelKey: '',
                    placeholderKey: '',
                    readonly: false,
                },
                targetAreaInvalidTextKey: '',
            },
            id: TabItemID.MAP,
            tabButtonXVM: { textKey: '' },
        },
    },
};
