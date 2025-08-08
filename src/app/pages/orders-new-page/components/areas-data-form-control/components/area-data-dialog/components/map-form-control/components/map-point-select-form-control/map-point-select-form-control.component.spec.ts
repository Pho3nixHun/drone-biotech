import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';
import { MapPointSelectFormControlVM } from './map-point-select-form-control.model';
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
import { By } from '@angular/platform-browser';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import {
    MapPointSelectFormControlMockService,
    provideMapPointSelectFormControlMockService,
    updateEntryPointSignal,
} from './map-point-select-form-control.service.mock';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import {
    provideMockEntryPointMarkerOptions,
    provideMockMapOptions,
} from 'src/app/shared/providers/google-maps-provider';

const enMock = { addButtonText: 'addButton', deleteButtonText: 'deleteButton' };

const vm: MapPointSelectFormControlVM = {
    deleteButtonTextKey: enMock.deleteButtonText,
    addButtonTextKey: enMock.addButtonText,
};

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
            [vm]="vm()"
            [formControl]="control"
        />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<MapPointSelectFormControlVM>();
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
    let compiled: HTMLElement;
    let mapPointSelectFormControlComponent: MapPointSelectFormControlComponent;
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
                provideMockEntryPointMarkerOptions(),
                provideMockMapOptions(),
                provideMockHeadOfficeLocation(),
                provideMapPointSelectFormControlMockService(),
            ],
        }).compileComponents();
        TestBed.overrideProvider(MapPointSelectFormControlService, {
            useFactory: () => new MapPointSelectFormControlMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        fixture.componentRef.setInput('vm', vm);
        innerDebugElement = fixture.debugElement.query(
            By.directive(MapPointSelectFormControlComponent)
        );
        mapPointSelectFormControlComponent =
            innerDebugElement.componentInstance;
        compiled = innerDebugElement.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //  test
    it('should disable to add new entry point to the map if one is already drawn', () => {
        // Arrange
        updateEntryPointSignal({ lat: 10, lng: 10 });

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    //  test
    it('should enable to add new entry point to the map if no entry point is drawn', () => {
        // Arrange
        updateEntryPointSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-primary')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(false);
    });

    it('should disable to delete entry point if there is no entry point drawn ', () => {
        // Arrange
        updateEntryPointSignal(null);

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(true);
    });

    it('should enable to delete entry point if there is an entry point drawn ', () => {
        // Arrange
        updateEntryPointSignal({ lat: 10, lng: 10 });

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-error')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(false);
    });

    // Interaction test
    it('should call drawMarker(null) when the addButton is clicked if there is no entry point drawn', () => {
        //Arrange
        updateEntryPointSignal(null);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(
            mapPointSelectFormControlComponent['pointSelectService'],
            'drawMarker'
        );
        fixture.debugElement
            .query(By.css('button'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledWith(null);
    });

    // Interaction test
    it('should call deleteMarker() when the deleteButton is clicked if there is an entry point a drawn', () => {
        //Arrange
        updateEntryPointSignal({ lat: 10, lng: 10 });
        const serviceSpy = jest.spyOn(
            mapPointSelectFormControlComponent['pointSelectService'],
            'deleteMarker'
        );

        //Act
        fixture.detectChanges();
        fixture.debugElement
            .query(By.css('button.btn-error'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledTimes(2);
    });

    // Unit test
    it('should initialize the map', () => {
        //Arrange
        const serviceSpy = jest.spyOn(
            mapPointSelectFormControlComponent['pointSelectService'],
            'initializeMap'
        );

        //Act
        fixture.detectChanges();

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(
            mapPointSelectFormControlComponent['mapRef']()
        );
    });
});
