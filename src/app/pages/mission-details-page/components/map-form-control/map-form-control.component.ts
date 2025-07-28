import {
    Component,
    computed,
    effect,
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
import { MapControl } from '../../mission-details-page.model';
import { MapInitializerDirective } from '@directives/map-initializer/map-initializer.directive';
import { MAP_OPTIONS } from 'src/app/shared/providers/google-maps-provider';
import { toSignal } from '@angular/core/rxjs-interop';

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
        MapInitializerDirective,
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
    protected readonly mapOptions = inject(MAP_OPTIONS);
    protected readonly mapSignal = signal<google.maps.Map | null>(null);

    protected readonly mapForm = this.fb.group({
        targetArea: this.fb.control<Coordinates[] | null>(null),
        entryPoint: this.fb.control<Coordinates | null>(null),
    });

    private readonly targetArea = toSignal(
        this.mapForm.controls.targetArea.valueChanges
    );

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

    private readonly setMapCenterEffect = effect(
        () => {
            const map = this.mapSignal();
            const center = this.mapCenter();
            if (!map || !center) return;
            map.setCenter(center);
            this.setMapCenterEffect.destroy();
        },
        { manualCleanup: true }
    );

    public writeValue(value: MapControl) {
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
