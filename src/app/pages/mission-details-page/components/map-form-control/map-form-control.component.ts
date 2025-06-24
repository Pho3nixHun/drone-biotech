import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    inject,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormBuilder,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { MapAreaSelectFormControlComponent } from './components/map-area-select-form-control/map-area-select-form-control.component';
import { MapPointSelectFormControlComponent } from './components/map-point-select-form-control/map-point-select-form-control.component';
import { noop } from 'rxjs';
import { getCenter } from 'geolib';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { MAP_OPTIONS } from '@providers/google-maps-provider';
import { MapControl } from '../../mission-details-page.model';

/**
 * MapFormControlComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a form control that handle the relevant information about the mission like the target area, entry point. It creates a Google Map to visualize the data.
 * - Passes relevant data, like config, texts.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including presentation, to create a cohesive user interface.
 */
@Component({
    selector: 'app-map-form-control',
    imports: [
        MapAreaSelectFormControlComponent,
        MapPointSelectFormControlComponent,
        ElementRefDirective,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './map-form-control.component.html',
})
export class MapFormControlComponent implements ControlValueAccessor {
    private readonly fb = inject(FormBuilder);
    protected readonly divSignal = signal<ElementRef<HTMLElement> | null>(null);
    private readonly mapOptions = inject(MAP_OPTIONS);
    private readonly targetArea = signal<Coordinates[] | null>(null);

    protected mapForm = this.fb.group({
        targetArea: this.fb.control<Coordinates[] | null>(null),
        entryPoint: this.fb.control<Coordinates | null>(null),
    });

    protected readonly mapSignal = computed(() => {
        const canvas = this.divSignal();
        if (!canvas) return null;
        return new google.maps.Map(canvas.nativeElement);
    });

    private readonly mapCenter = computed<Coordinates | null>(() => {
        const area = this.targetArea();
        if (!area) return null;
        const center = getCenter(area);
        return center
            ? {
                  lat: center.latitude,
                  lng: center.longitude,
              }
            : null;
    });

    protected readonly setMapCenterEffect = effect(
        () => {
            const map = this.mapSignal();
            const center = this.mapCenter();
            if (!map || !center) return;
            map.setCenter(center);
            this.setMapCenterEffect.destroy();
        },
        { manualCleanup: true }
    );

    private readonly setMapOptionsEffect = effect(() => {
        const map = this.mapSignal();
        if (!map) return;

        map.setOptions(this.mapOptions);
    });

    public writeValue(value: MapControl) {
        this.targetArea.set(value.targetArea);
        this.mapForm.setValue(value);
    }

    private onChange: (value: MapControl) => void = () => noop;

    private onTouched: () => void = () => noop;

    public registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
