import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';
import {
    Component,
    computed,
    DebugElement,
    ElementRef,
    inject,
    signal,
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import {
    MapPointSelectFormControlMockService,
    provideMapPointSelectFormControlMockService,
    updateEntryPointSignal,
} from './map-point-select-form-control.service.mock';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';

@Component({
    imports: [
        MapPointSelectFormControlComponent,
        ElementRefDirective,
        ReactiveFormsModule,
    ],
    template: `
        <div appElementRef [signal]="divSignal" style="height: 600px"></div>

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
    let compiled: HTMLElement;
    let component: MapPointSelectFormControlComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideMapPointSelectFormControlMockService()],
        }).compileComponents();
        TestBed.overrideProvider(MapPointSelectFormControlService, {
            useFactory: () => new MapPointSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        debugElement = fixture.debugElement.query(
            By.directive(MapPointSelectFormControlComponent)
        );
        testHostComponent = fixture.componentInstance;
        component = debugElement.componentInstance;
        compiled = debugElement.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit test
    it('should draw a marker if there is a value in the form', () => {
        // Arrange
        const entryPoint = { lat: 10, lng: 10 };
        testHostComponent.control.setValue(entryPoint);

        const serviceSpy = jest.spyOn(
            component['pointSelectService'],
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
            component['pointSelectService'],
            'deleteMarker'
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalled();
    });

    // Unit test
    it('should propagate the value back to the form if there is an entryPoint drawn on the map', () => {
        // Arrange
        const entryPoint = { lat: 10, lng: 10 };
        updateEntryPointSignal({ lat: 10, lng: 10 });

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['entryPointSignal']()).toStrictEqual(entryPoint);
        expect(testHostComponent.control.value).toStrictEqual(entryPoint);
    });

    // Unit test
    it('should initialize the map', () => {
        //Arrange
        const serviceSpy = jest.spyOn(
            component['pointSelectService'],
            'initializeMap'
        );

        //Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(component['mapRef']());
    });
});
