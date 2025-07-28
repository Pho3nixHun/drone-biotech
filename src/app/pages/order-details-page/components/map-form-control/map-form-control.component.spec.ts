import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFormControlComponent } from './map-form-control.component';
import {
    provideActiveMissionPolygonOptions,
    provideCompletedMissionPolygonOptions,
    provideMockMapOptions,
} from 'src/app/shared/providers/google-maps-provider';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TargetArea } from '../../order-details-page.model';
import { MapFormControlVM } from './map-form-control.model';
import { By } from '@angular/platform-browser';
import { getTranslocoModule } from 'transloco-testing.module';

const enMock = {
    completedMissionsLabel: 'completed',
    completedMissionsValue: 'completedM',
    remainingMissionsLabel: 'remainingM',
    remainingMissionsValue: 'remaining',
    totalMissionsLabel: 'total',
    totalMissionsValue: 'totalM',
};

const vm: MapFormControlVM = {
    completedMissionsLabelKey: enMock.completedMissionsLabel,
    completedMissionsValueKey: enMock.completedMissionsValue,
    remainingMissionsLabelKey: enMock.remainingMissionsLabel,
    remainingMissionsValueKey: enMock.remainingMissionsValue,
    totalMissionsLabelKey: enMock.totalMissionsLabel,
    totalMissionsValueKey: enMock.totalMissionsValue,
};

@Component({
    imports: [MapFormControlComponent, ReactiveFormsModule],
    template: `
        <app-map-form-control [formControl]="targetAreasControl" [vm]="vm" />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public targetAreasControl = this.fb.control<TargetArea[] | null>(null);
    protected vm = vm;
}

describe('MapFormControlComponent', () => {
    let hostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let innerComponent: MapFormControlComponent;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
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
                provideActiveMissionPolygonOptions(),
                provideCompletedMissionPolygonOptions(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        innerComponent = fixture.debugElement.query(
            By.directive(MapFormControlComponent)
        ).componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Unit testing
    it('should set the value of the inner form control', () => {
        // Arrange
        const areas: TargetArea[] = [
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
        ];
        hostComponent.targetAreasControl.setValue(areas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(innerComponent['mapFormGroup'].controls.targetAreas.value).toBe(
            areas
        );
    });

    // Unit testing
    it('should calculate the mapCenter', () => {
        // Arrange
        const areas: TargetArea[] = [
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
        ];
        hostComponent.targetAreasControl.setValue(areas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(innerComponent['mapCenter']()).toStrictEqual({ lat: 0, lng: 1 });
    });

    // Unit testing
    it('should calculate the stats correctly if there are no targetAreas', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(innerComponent['missionStats']()).toBe(null);
    });

    // Unit testing
    it('should calculate the stats correctly if there are targetAreas', () => {
        // Arrange
        const areas: TargetArea[] = [
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'completed' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'completed' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
        ];
        hostComponent.targetAreasControl.setValue(areas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(innerComponent['missionStats']()).toStrictEqual({
            completedMissions: 2,
            remainingMissions: 3,
            totalMissions: 5,
        });
    });

    // Snapshot testing
    it('should render the template correctly if there are stats about the targetAreas', () => {
        // Arrange
        const areas: TargetArea[] = [
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
            { coordinates: [{ lat: 0, lng: 1 }], type: 'active' },
        ];
        hostComponent.targetAreasControl.setValue(areas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if there are no stats about the targetAreas', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
