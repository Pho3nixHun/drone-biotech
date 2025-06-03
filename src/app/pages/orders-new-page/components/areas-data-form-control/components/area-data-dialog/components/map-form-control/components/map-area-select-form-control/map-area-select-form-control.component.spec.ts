import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';
import { MapAreaSelectFormControlVM } from './map-area-select-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    Component,
    computed,
    DebugElement,
    ElementRef,
    inject,
    input,
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
import {
    provideMockHeadOfficeLocation,
    provideMockMapOptions,
    provideMockInfoWindowOptions,
    provideMockPolygonOptions,
} from '@providers/google-maps-provider';

const enMock = {
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    areaValue: 'area',
    coordinatesLabel: 'coordinates',
    editButton: 'edit',
};

const vm: MapAreaSelectFormControlVM = {
    deleteButtonTextKey: enMock.deleteButtonText,
    addButtonTextKey: enMock.addButtonText,
    areaValueKey: enMock.areaValue,
    coordinatesLabelKey: enMock.coordinatesLabel,
    editButtonTextKey: enMock.editButton,
};
@Component({
    imports: [
        MapAreaSelectFormControlComponent,
        ReactiveFormsModule,
        ElementRefDirective,
    ],
    template: ` <div
            appElementRef
            [signal]="divSignal"
            style="height: 600px"
        ></div>

        <app-map-area-select-form-control
            [mapRef]="mapSignal()"
            [vm]="vm()"
            [formControl]="control"
        />`,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<MapAreaSelectFormControlVM>();
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
    let component: TestHostComponent;
    let mapAreaSelectFormControlComponent: MapAreaSelectFormControlComponent;
    let innerDebugElement: DebugElement;

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
                provideMockHeadOfficeLocation(),
                provideMockMapOptions(),
                provideMockInfoWindowOptions(),
                provideMockPolygonOptions(),
            ],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectFormControlService, {
            useFactory: () => new MapAreaSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;

        component = fixture.componentInstance;
        innerDebugElement = fixture.debugElement.query(
            By.directive(MapAreaSelectFormControlComponent)
        );
        mapAreaSelectFormControlComponent = innerDebugElement.componentInstance;
        compiled = innerDebugElement.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit test
    it('should disable to add new target area to the map if one is already drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ]);
        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    // Unit test
    it('should enable to add new target area to the map if no target area is drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-primary')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(false);
    });

    it('should disable to delete target area if there is no target area drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    it('should enable to delete target area if there is a target area drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
            { lat: 40, lng: 40 },
        ]);

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-error')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(false);
    });

    // Interaction test
    it('should call drawPolygon(null) when the addButton is clicked if there is no target area drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(
            mapAreaSelectFormControlComponent['areaSelectService'],
            'drawPolygon'
        );
        fixture.debugElement
            .query(By.css('button.btn-primary'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledWith(null);
    });

    // Interaction test
    it('should call deletePolygon() when the deleteButton is clicked if there is a target area drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ]);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(
            mapAreaSelectFormControlComponent['areaSelectService'],
            'deletePolygon'
        );
        fixture.debugElement
            .query(By.css('button.btn-error'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledTimes(1);
    });

    it('should initialize the map with the mapCanvas', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        const serviceSpy = jest.spyOn(
            mapAreaSelectFormControlComponent['areaSelectService'],
            'initializeMap'
        );

        //Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(component['mapSignal']());
    });
});
