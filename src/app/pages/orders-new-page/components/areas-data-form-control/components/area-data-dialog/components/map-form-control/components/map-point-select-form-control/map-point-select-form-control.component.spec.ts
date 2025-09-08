import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';
import {
    MapPointSelectFormControlVM,
    provideMockEntryPointMarkerOptions,
} from './map-point-select-form-control.model';
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
} from './map-point-select-form-control.service.mock';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { provideMockHeadOfficeLocation } from '@services/distance/distance.model';
import { provideMockMapOptions } from '../../map-form-control.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { getTranslocoModule } from 'transloco-testing.module';

const vm: MapPointSelectFormControlVM = {
    addButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    deleteButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
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
                    langs: { en: {} },
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
