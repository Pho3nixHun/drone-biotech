import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFormControlComponent } from './map-form-control.component';
import { Component, DebugElement, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    MapFormControlVM,
    provideMockMapOptions,
} from './map-form-control.model';
import { By } from '@angular/platform-browser';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    provideMockInfoWindowOptions,
    provideMockPolygonOptions,
} from './components/map-area-select-form-control/map-area-select-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { provideMockEntryPointMarkerOptions } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { MapAreaSelectFormControlMockService } from './components/map-area-select-form-control/map-area-select-form-control.service.mock';
import { MapAreaSelectFormControlService } from './components/map-area-select-form-control/map-area-select-form-control.service';
import { MatIcon } from '@interfaces/mat-icon.enum';

const headOffice = { lat: 25, lng: 25 };

const en = {
    areaValue: 'area',
    coordinatesLabel: 'coords',
    distanceValue: 'distance',
    placeholder: 'place',
};

const mockVMWithCenter: MapFormControlVM = {
    defaultCenter: { lat: 10, lng: 10 },
    mapAreaSelectFormControlVM: {
        addButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
        areaValueKey: en.areaValue,
        coordinatesLabelKey: en.coordinatesLabel,
        deleteButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        editButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    },
    mapPointSelectFormControlVM: {
        addButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
        deleteButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'fill',
        },
    },
    mapSearchInputFormControlVM: {
        distanceValueKey: en.distanceValue,
        placeholderKey: en.placeholder,
    },
};
const mockVMWithoutCenter: MapFormControlVM = {
    defaultCenter: null,
    mapAreaSelectFormControlVM: {
        addButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
        areaValueKey: en.areaValue,
        coordinatesLabelKey: en.coordinatesLabel,
        deleteButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        editButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    },
    mapPointSelectFormControlVM: {
        addButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
        deleteButtonXVM: {
            icon: MatIcon.ADD,
            variant: 'fill',
        },
    },
    mapSearchInputFormControlVM: {
        distanceValueKey: en.distanceValue,
        placeholderKey: en.placeholder,
    },
};

@Component({
    imports: [MapFormControlComponent, ReactiveFormsModule],
    template: ` <app-map-form-control [formControl]="control" [vm]="vm()" /> `,
})
class TestHostComponent {
    public vm = input.required<MapFormControlVM>();
    private readonly fb = inject(FormBuilder);
    public control = this.fb.control<{
        targetArea: Coordinates[] | null;
        entryPoint: Coordinates | null;
    }>(
        {
            targetArea: null,
            entryPoint: null,
        },
        Validators.required
    );
}
describe('MapFormControlComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let mapFormControlComponent: MapFormControlComponent;
    let innerDebugElement: DebugElement;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockMapOptions(),
                provideMockHeadOfficeLocation(headOffice),
                provideMockPolygonOptions(),
                provideMockInfoWindowOptions(),
                provideMockEntryPointMarkerOptions(),
            ],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectFormControlService, {
            useFactory: () => new MapAreaSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        innerDebugElement = fixture.debugElement.query(
            By.directive(MapFormControlComponent)
        );
        mapFormControlComponent = innerDebugElement.componentInstance;
        compiled = innerDebugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly when the VM is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithCenter);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the targetAreaCenter to null if no targetArea is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithCenter);

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapFormControlComponent['targetAreaCenter']()).toBe(null);
    });

    // Unit testing
    it('should set the targetAreaCenter to the center of the area if targetArea is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithCenter);

        const area = [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
            { lat: 40, lng: 40 },
        ];
        component.control.setValue({ entryPoint: null, targetArea: area });

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapFormControlComponent['targetAreaCenter']()).toStrictEqual({
            lat: 25.41329550954331,
            lng: 23.965178244277507,
        });
    });

    // Unit testing
    it('should set the mapSignal as a map', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithCenter);

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapFormControlComponent['mapSignal']()).toBeTruthy();
    });

    // Unit testing
    it('should set the mapCenter to targetAreaCenter primarily if there is a target area provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithCenter);
        const area = [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
            { lat: 40, lng: 40 },
        ];
        component.control.setValue({ entryPoint: null, targetArea: area });

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapFormControlComponent['mapCenter']()).toStrictEqual({
            lat: 25.41329550954331,
            lng: 23.965178244277507,
        });
    });

    // Unit testing
    it('should set the mapCenter to the defaultCenter secondly if there is no target area provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithoutCenter);

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapFormControlComponent['mapCenter']()).toStrictEqual(
            headOffice
        );
    });
});
