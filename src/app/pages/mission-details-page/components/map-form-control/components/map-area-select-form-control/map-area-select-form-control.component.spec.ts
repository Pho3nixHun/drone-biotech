import {
    Component,
    computed,
    DebugElement,
    ElementRef,
    inject,
    signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';
import { Coordinates } from '@stores/location/location.model';
import { By } from '@angular/platform-browser';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideMockPolygonOptions } from 'src/app/shared/providers/google-maps-provider';
import { MapAreaSelectService } from './map-area-select.service';
import { MapAreaSelectMockService } from './map-area-select-mock.service';

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
    let debugEl: DebugElement;
    let service: MapAreaSelectService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideMockPolygonOptions()],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectService, {
            useFactory: () => new MapAreaSelectMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        debugEl = fixture.debugElement.query(
            By.directive(MapAreaSelectFormControlComponent)
        );
        service = debugEl.injector.get(MapAreaSelectService);
        testHostComponent = fixture.componentInstance;
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
});
