import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFormControlComponent } from './area-form-control.component';
import {
    provideActiveMissionPolygonOptions,
    provideCompletedMissionPolygonOptions,
} from 'src/app/shared/providers/google-maps-provider';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TargetArea } from 'src/app/pages/order-details-page/order-details-page.model';
import { MapInitializerDirective } from '@directives/map-initializer/map-initializer.directive';
import { AreaFormControlService } from './area-form-control.service';

@Component({
    imports: [
        AreaFormControlComponent,
        ReactiveFormsModule,
        MapInitializerDirective,
    ],
    template: ` <div
            appMapInitializer
            [signal]="mapSignal"
            [mapOptions]="{}"
            style="height: 500px"
            class="mb-4"
        ></div>
        @if (mapSignal(); as map) {
            <app-area-form-control
                [map]="map"
                [formControl]="mapFormGroup.controls.targetAreas"
            />
        }`,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public mapFormGroup = this.fb.group({
        targetAreas: this.fb.control<TargetArea[] | null>(null),
    });
    protected readonly mapSignal = signal<google.maps.Map | null>(null);
}

describe('AreaFormControlComponent', () => {
    let hostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let service: AreaFormControlService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [
                provideActiveMissionPolygonOptions(),
                provideCompletedMissionPolygonOptions(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        service = TestBed.inject(AreaFormControlService);
        hostComponent = fixture.componentInstance;
    });

    // Unit testing
    it('should set the map with the service', () => {
        // Arrange
        const serviceSpy = jest.spyOn(service, 'setMap');

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(hostComponent['mapSignal']());
    });

    // Unit testing
    it('should call the drawPolygons function from the service if there are targetAreas provided', () => {
        // Arrange
        const serviceSpy = jest.spyOn(service, 'drawPolygons');
        hostComponent.mapFormGroup.setValue({
            targetAreas: [{ coordinates: [], type: 'active' }],
        });

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should not call the drawPolygons function from the service if there are no targetAreas provided', () => {
        // Arrange
        const serviceSpy = jest.spyOn(service, 'drawPolygons');

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledTimes(0);
    });
});
