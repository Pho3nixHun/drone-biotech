import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFormControlComponent } from './map-form-control.component';
import { Component, DebugElement, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Coordinates } from '@stores/location/location.model';
import { MapAreaSelectFormControlMockService } from './components/map-area-select-form-control/map-area-select-form-control.service.mock';
import { MapAreaSelectFormControlService } from './components/map-area-select-form-control/map-area-select-form-control.service';
import { provideMockMapOptions } from '@providers/google-maps-provider';
import { MapPointSelectFormControlService } from './components/map-point-select-form-control/map-point-select-form-control.service';
import { MapPointSelectFormControlMockService } from './components/map-point-select-form-control/map-point-select-form-control.service.mock';

@Component({
    imports: [MapFormControlComponent, ReactiveFormsModule],
    template: ` <app-map-form-control [formControl]="control" /> `,
})
class TestHostComponent {
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
    let fixture: ComponentFixture<TestHostComponent>;
    let component: MapFormControlComponent;
    let debugElement: DebugElement;
    let compiled: HTMLElement;
    let testHostComponent: TestHostComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideMockMapOptions()],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectFormControlService, {
            useFactory: () => new MapAreaSelectFormControlMockService(),
        });
        TestBed.overrideProvider(MapPointSelectFormControlService, {
            useFactory: () => new MapPointSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        debugElement = fixture.debugElement.query(
            By.directive(MapFormControlComponent)
        );
        component = debugElement.componentInstance;
        compiled = debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the mapForm value if the value is provided in the upper form', () => {
        // Arrange
        const val = {
            entryPoint: { lat: 10, lng: 2 },
            targetArea: [
                { lat: 10, lng: 10 },
                { lat: 20, lng: 20 },
                { lat: 30, lng: 30 },
            ],
        };
        testHostComponent.control.setValue(val);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['targetArea']()).toStrictEqual(val.targetArea);
    });

    // Unit testing
    it('should set the mapSignal as a map', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['mapSignal']()).toBeTruthy();
    });

    // Unit testing
    it('should set the mapCenter to targetAreaCenter primarily if there is a target area provided', () => {
        // Arrange
        const area = [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
            { lat: 40, lng: 40 },
        ];
        testHostComponent.control.setValue({
            entryPoint: null,
            targetArea: area,
        });

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['mapCenter']()).toStrictEqual({
            lat: 25.41329550954331,
            lng: 23.965178244277507,
        });
    });
});
