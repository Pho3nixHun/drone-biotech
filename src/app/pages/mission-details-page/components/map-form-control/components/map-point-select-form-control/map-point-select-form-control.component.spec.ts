import {
    Component,
    computed,
    DebugElement,
    ElementRef,
    inject,
    signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';
import { By } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { MapPointSelectService } from './map-point-select.service';
import {
    MapPointSelectMockService,
    provideMapPointSelectMockService,
} from './map-point-select-mock.service';

@Component({
    imports: [MapPointSelectFormControlComponent, ReactiveFormsModule],
    template: `
        <app-map-point-select-form-control
            [mapRef]="mapSignal()"
            [formControl]="control"
        />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public control = this.fb.control<Coordinates | null>(null);
    protected readonly divSignal = signal<ElementRef<HTMLElement> | null>(null);
    protected readonly mapSignal = computed(() => {
        const canvas = this.divSignal();
        if (!canvas) return null;
        return new google.maps.Map(canvas.nativeElement);
    });
}

describe('MapPointSelectFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let testHostComponent: TestHostComponent;
    let component: MapPointSelectFormControlComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideMapPointSelectMockService()],
        }).compileComponents();
        TestBed.overrideProvider(MapPointSelectService, {
            useFactory: () => new MapPointSelectMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        debugElement = fixture.debugElement.query(
            By.directive(MapPointSelectFormControlComponent)
        );
        testHostComponent = fixture.componentInstance;
        component = debugElement.componentInstance;
    });

    // Unit test
    it('should draw a marker if there is a value in the form', () => {
        // Arrange
        const entryPoint = { lat: 10, lng: 10 };
        testHostComponent.control.setValue(entryPoint);

        const serviceSpy = jest.spyOn(
            component['mapPointSelectService'],
            'drawMarker'
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(entryPoint);
    });

    // Unit test
    it('should delete marker if there is no value in the form', () => {
        // Arrange
        const serviceSpy = jest.spyOn(
            component['mapPointSelectService'],
            'deleteMarker'
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalled();
    });
});
