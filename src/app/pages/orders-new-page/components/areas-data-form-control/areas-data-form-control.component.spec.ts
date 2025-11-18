import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { AreasDataFormControlVM } from './areas-data-form-control.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { provideHttpClient } from '@angular/common/http';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { DistanceService } from '@services/distance/distance.service';
import { AreasDataFormControlComponent } from './areas-data-form-control.component';
import { of } from 'rxjs';
import {
    Mission,
    TabItemID,
} from './components/area-data-dialog/area-data-dialog.model';
import { PolygonColor } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';

describe('AreasDataFormControlComponent', () => {
    let fixture: ComponentFixture<AreasDataFormControlComponent>;
    let compiled: HTMLElement;
    let component: AreasDataFormControlComponent;

    const mockDistanceService = {
        getDistance: jest.fn().mockReturnValue(3000),
        getShortestDistanceWithWaypoints: jest.fn().mockReturnValue(4000),
    };

    const mockReverseGeocodingService = {
        getAddressByCoordinates: jest.fn().mockReturnValue('Debrecen'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AreasDataFormControlComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideHttpClient(),
                provideMockHeadOfficeLocation(),
                { provide: DistanceService, useValue: mockDistanceService },
                {
                    provide: ReverseGeocodingService,
                    useValue: mockReverseGeocodingService,
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AreasDataFormControlComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;

        mockDistanceService.getDistance.mockReturnValue(of(1000));
        mockDistanceService.getShortestDistanceWithWaypoints.mockReturnValue(
            of(5000)
        );
        mockReverseGeocodingService.getAddressByCoordinates.mockReturnValue(
            of('Debrecen')
        );
    });

    // Snapshot test
    it('should render the template correctly with the projected contents', () => {
        //Arrange
        fixture.componentRef.setInput('vm', mockVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot test
    it('should not render the cards and total when there is no area provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', mockVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot test
    it('should render 1 card and total when there is 1 mission provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', mockVM);
        const mission: Mission = {
            applicationDate: new Date(10),
            comment: 'comment',
            name: 'mission',
            entryPoint: { lat: 10, lng: 10 },
            targetArea: [],
            dosePerHq: 3,
            id: 'id12',
        };
        component.writeValue([mission]);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot test
    it('should render 3 cards and total when there are 3 missions provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', mockVM);
        const mission: Mission[] = [
            {
                applicationDate: new Date(10),
                comment: 'comment1',
                name: 'mission',
                entryPoint: { lat: 10, lng: 10 },
                targetArea: [],
                dosePerHq: 3,
                id: 'id1',
            },
            {
                applicationDate: new Date(10),
                comment: 'comment2',
                name: 'mission',
                entryPoint: { lat: 10, lng: 10 },
                targetArea: [],
                dosePerHq: 3,
                id: 'id2',
            },
            {
                applicationDate: new Date(10),
                comment: 'comment3',
                name: 'mission',
                entryPoint: { lat: 10, lng: 10 },
                targetArea: [],
                dosePerHq: 3,
                id: 'id3',
            },
        ];
        component.writeValue(mission);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should write value', () => {
        // Arrange
        const mission: Mission = {
            applicationDate: new Date(10),
            comment: 'comment',
            name: 'mission',
            entryPoint: { lat: 10, lng: 10 },
            targetArea: [],
            dosePerHq: 3,
            id: 'id12',
        };
        component.writeValue([mission]);

        // There is no need to act

        // Assert
        expect(component['value']()).toEqual([mission]);
    });

    // Unit testing
    it('should set disabled state', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        component.setDisabledState(true);
        fixture.detectChanges();

        // Assert
        expect(component['disabled']()).toBe(true);
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    title: 'tit',
    label: 'lab',
    missionName: 'mission',
    missionPlaceholder: 'missionPlace',
    comment: 'comment',
    commentPlaceholder: 'commentPlace',
    coordinates: 'coords',
    coordinatesPlaceholder: 'coordsPlace',
    applicationDate: 'applicationDate',
    applicationDatePlaceholder: 'applicationDatePlace',
    dosePerHq: 'dosePer',
    dosePerHqPlaceholder: 'dosePerPlace',

    dosePerHqMinError: 'dosePerHqMinErrorAssistiveText',
    missionNameMaxCharsAllowed: 'missionNameMaxCharactersAllowedAssistiveText',
    missionNameMaxCharsCounter: 'missionNameMaxCharactersCounterAssistiveText',
    requiredAssistive: 'requiredAssistiveText',

    closeButton: 'close',
    cancelButton: 'cancelButton',
    submitButton: 'submit',
    addButton: 'addButton',
    deleteButton: 'deleteButton',

    actionsHeader: 'actions',
    targetAreaSizeHeader: 'targetAreaSize',
    entryPointHeader: 'entryPoint',
    doseHeader: 'dose',
    applicationDateHeader: 'application',
    trichogrammaRequirementHeader: 'trichogrammaRequirement',
    distanceFromHeadOfficeHeader: 'distanceFromHeadOffice',
    totalDistanceFromHeadOfficeHeader: 'totalDistanceFromHeadOffice',
    totalTargetAreaSizeHeader: 'totalTargetAreaSize',
    totalTrichogrammaRequirementHeader: 'totalTrichogrammaRequirement',
    commentHeader: 'comment',
    missionHeader: 'mission',

    applicationDateValue: 'applicationDate',
    distanceFromHeadOfficeValue: 'distanceFromHeadOffice',
    doseValue: 'doseValue',
    targetAreaSizeValue: 'targetAreaSize',
    trichogrammaRequirementValue: 'trichogrammaRequirement',

    mapFormControl: {
        mapSearchInput: {
            placeholder: 'place',
            distanceValue: 'distance',
        },
        mapAreaSelect: {
            addButton: 'addButton',
            deleteButton: 'deleteButton',
            areaValue: 'area',
            editButton: 'edit',
        },
        warning: 'warn',
        deleteButton: 'delete',
        cancelButton: 'cancel',
    },
};

const mockVM: AreasDataFormControlVM = {
    addButtonXVM: {
        icon: MatIcon.CLOSE,
        variant: 'fill',
    },
    labelKey: enMock.label,
    editButtonXVM: {
        secondary: false,
        variant: 'ghost',
        icon: MatIcon.EDIT,
    },
    deleteButtonXVM: {
        secondary: false,
        variant: 'ghost',
        icon: MatIcon.DELETE,
    },

    areaDataDialogVM: {
        actualPosition: null,
        addTitleKey: 'add',
        editTitleKey: 'edit',

        dosePerHqMinErrorAssistiveTextValueKey: enMock.dosePerHqMinError,
        missionNameMaxCharactersAllowedAssistiveTextValueKey:
            enMock.missionNameMaxCharsAllowed,
        missionNameMaxCharactersCounterAssistiveTextValueKey:
            enMock.missionNameMaxCharsCounter,
        requiredAssistiveTextKey: enMock.requiredAssistive,

        dosePerHqInputTextXVM: {
            id: 'id',
            labelKey: enMock.dosePerHq,
            placeholderKey: enMock.dosePerHqPlaceholder,
            readonly: false,
        },
        missionNameInputTextXVM: {
            id: 'id',
            autocomplete: 'email',
            labelKey: enMock.missionName,
            placeholderKey: enMock.missionPlaceholder,
            readonly: false,
            type: 'datetime-local',
        },
        commentInputTextareaXVM: {
            id: 'id',
            labelKey: enMock.comment,
            placeholderKey: enMock.commentPlaceholder,
            readonly: false,
        },
        closeButtonXVM: {
            icon: MatIcon.CLOSE,
            secondary: false,
            variant: 'fill',
        },
        applicationDateInputTextXVM: {
            id: 'id',
            autocomplete: 'email',
            labelKey: enMock.applicationDate,
            placeholderKey: enMock.applicationDatePlaceholder,
            readonly: false,
            type: 'email',
        },
        cancelButtonXVM: {
            textKey: enMock.cancelButton,
            secondary: false,
            variant: 'fill',
        },
        confirmButtonXVM: {
            textKey: enMock.cancelButton,
            secondary: false,
            variant: 'fill',
        },

        mapTabsXVM: {
            orientation: 'vertical',
            variant: 'secondary',
            visualTabItemVM: {
                id: TabItemID.MAP,
                content: {
                    addAdvancedMarkerButtonXVM: {
                        icon: MatIcon.ADD,
                        variant: 'fill',
                    },
                    addPolygonButtonXVM: {
                        icon: MatIcon.ADD,
                        variant: 'fill',
                    },
                    contentValueKey: '',
                    polygonColors: {
                        fillColor: PolygonColor.BLUE,
                        strokeColor: PolygonColor.BLUE,
                    },
                    polygonContextMenuVM: {
                        closeButtonXVM: {
                            icon: MatIcon.ADD,
                            variant: 'fill',
                        },
                        removePolygonButtonXVM: {
                            textKey: enMock.deleteButton,
                            variant: 'fill',
                        },
                        removeVertexButtonXVM: {
                            textKey: enMock.deleteButton,
                            variant: 'fill',
                        },
                    },
                    removeAdvancedMarkerButtonXVM: {
                        icon: MatIcon.ADD,
                        variant: 'fill',
                    },
                },
                tabButtonXVM: {
                    textKey: '',
                },
            },
            textTabItemVM: {
                id: TabItemID.COORDINATES,
                content: {
                    entryPointInputTextXVM: {
                        id: '',
                        autocomplete: 'off',
                        labelKey: 'label',
                        placeholderKey: 'place',
                        readonly: false,
                        type: 'text',
                    },
                    entryPointInvalidTextKey: '',
                    targetAreaInvalidTextKey: '',
                    targetAreaInputTextareaXVM: {
                        id: '',
                        labelKey: 'label',
                        placeholderKey: 'place',
                        readonly: false,
                    },
                },

                tabButtonXVM: {
                    textKey: '',
                },
            },
        },
    },

    deleteMissionDialogVM: {
        closeButtonXVM: {
            icon: MatIcon.CLOSE,
            secondary: true,
            variant: 'ghost',
        },
        titleKey: enMock.title,
        confirmTextKey: enMock.mapFormControl.warning,
        cancelButtonXVM: {
            textKey: enMock.mapFormControl.cancelButton,
            secondary: false,
            variant: 'fill',
        },
        confirmButtonXVM: {
            textKey: enMock.mapFormControl.deleteButton,
            secondary: false,
            variant: 'fill',
        },
    },

    actionsHeaderKey: enMock.actionsHeader,
    targetAreaSizeHeaderKey: enMock.targetAreaSizeHeader,
    entryPointHeaderKey: enMock.entryPointHeader,
    doseHeaderKey: enMock.doseHeader,
    applicationDateHeaderKey: enMock.applicationDateHeader,
    trichogrammaRequirementHeaderKey: enMock.trichogrammaRequirementHeader,
    distanceFromHeadOfficeHeaderKey: enMock.distanceFromHeadOfficeHeader,
    totalDistanceFromHeadOfficeHeaderKey:
        enMock.totalDistanceFromHeadOfficeHeader,
    totalTargetAreaSizeHeaderKey: enMock.totalTargetAreaSizeHeader,
    totalTrichogrammaRequirementHeaderKey:
        enMock.totalTrichogrammaRequirementHeader,

    applicationDateValueKey: enMock.applicationDateValue,
    distanceFromHeadOfficeValueKey: enMock.distanceFromHeadOfficeValue,
    doseValueKey: enMock.doseValue,
    targetAreaSizeValueKey: enMock.targetAreaSizeValue,
    trichogrammaRequirementValueKey: enMock.trichogrammaRequirementValue,

    commentHeaderKey: enMock.commentHeader,
    missionHeaderKey: enMock.missionHeader,
};
