import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import {
    MapAreaSelectFormControlVM,
    provideMockInfoWindowOptions,
    provideMockPolygonOptions,
} from './map-area-select-form-control.model';
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
import { provideMockMapOptions } from '../../map-form-control.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@interfaces/mat-icon.enum';

const enMock = {
    areaValue: 'area',
    coordinatesLabel: 'coordinates',
};

const vm: MapAreaSelectFormControlVM = {
    addButtonVM: { type: 'withIcon', icon: MatIcon.ADD, variant: 'fill' },
    deleteButtonVM: { type: 'withIcon', icon: MatIcon.ADD, variant: 'fill' },
    editButtonVM: { type: 'withIcon', icon: MatIcon.ADD, variant: 'fill' },
    areaValueKey: enMock.areaValue,
    coordinatesLabelKey: enMock.coordinatesLabel,
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

        component = fixture.componentInstance;
        innerDebugElement = fixture.debugElement.query(
            By.directive(MapAreaSelectFormControlComponent)
        );
        mapAreaSelectFormControlComponent = innerDebugElement.componentInstance;
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
