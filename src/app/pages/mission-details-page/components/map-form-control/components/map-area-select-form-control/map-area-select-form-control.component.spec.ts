import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';
import { Coordinates } from '@stores/location/location.model';
import {
    Component,
    computed,
    DebugElement,
    ElementRef,
    inject,
    signal,
} from '@angular/core';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import {
    MapAreaSelectFormControlMockService,
    updatePolygonSignal,
} from './map-area-select-form-control.service.mock';
import { By } from '@angular/platform-browser';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
    imports: [
        MapAreaSelectFormControlComponent,
        ReactiveFormsModule,
        ElementRefDirective,
    ],
    template: `
        <div appElementRef [signal]="divSignal" style="height: 600px"></div>

        <app-map-area-select-form-control
            [mapRef]="mapSignal()"
            [formControl]="control"
        />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public control = this.fb.control<Coordinates[] | null>([]);
    protected readonly divSignal = signal<ElementRef<HTMLElement> | null>(null);
    protected readonly mapSignal = computed(() => {
        const canvas = this.divSignal();
        if (!canvas) return null;
        return new google.maps.Map(canvas.nativeElement);
    });
}

describe('MapAreaSelectFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let testHostComponent: TestHostComponent;
    let component: MapAreaSelectFormControlComponent;
    let debugEl: DebugElement;
    let service: MapAreaSelectFormControlService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectFormControlService, {
            useFactory: () => new MapAreaSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        debugEl = fixture.debugElement.query(
            By.directive(MapAreaSelectFormControlComponent)
        );
        service = debugEl.injector.get(MapAreaSelectFormControlService);
        testHostComponent = fixture.componentInstance;
        component = debugEl.componentInstance;
        compiled = debugEl.nativeElement;
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
    it('should initialize the map with the mapCanvas', () => {
        //Arrange
        const serviceSpy = jest.spyOn(service, 'initializeMap');

        //Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(
            testHostComponent['mapSignal']()
        );
    });

    // Unit test
    it('should draw polygon if there is a value in the form', () => {
        //Arrange
        const value = [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ];
        testHostComponent.control.setValue(value);
        const serviceSpy = jest.spyOn(service, 'drawPolygon');

        //Act
        fixture.detectChanges();
        //Assert
        expect(serviceSpy).toHaveBeenCalledWith(value);
    });

    // Unit test
    it('should delete polygon if there is no value in the form', () => {
        //Arrange
        testHostComponent.control.setValue(null);
        const serviceSpy = jest.spyOn(service, 'deletePolygon');

        //Act
        fixture.detectChanges();

        //Assert
        expect(serviceSpy).toHaveBeenCalled();
    });

    // Unit test
    it('should propagate the value back to the form if there is a polygon drawn on the map', () => {
        // Arrange
        const polygon = [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ];
        updatePolygonSignal(polygon);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['polygonPathsSignal']()).toStrictEqual(polygon);
        expect(testHostComponent.control.value).toStrictEqual(polygon);
    });
});
