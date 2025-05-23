/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    Signal,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormBuilder,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MapFormControlVM } from './map-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { MapAreaSelectFormControlComponent } from './components/map-area-select-form-control/map-area-select-form-control.component';
import { MapPointSelectFormControlComponent } from './components/map-point-select-form-control/map-point-select-form-control.component';
import { MapSearchInputFormControlComponent } from './components/map-search-input-form-control/map-search-input-form-control.component';
import { distinctUntilChanged, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { getCenter } from 'geolib';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import {
    MAP_OPTIONS,
    HEAD_OFFICE_LOCATION,
} from '@providers/google-maps-provider';

@Component({
    selector: 'app-map-form-control',
    imports: [
        MapAreaSelectFormControlComponent,
        MapPointSelectFormControlComponent,
        ElementRefDirective,
        ReactiveFormsModule,
        MapSearchInputFormControlComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapFormControlComponent),
            multi: true,
        },
    ],
    schemas: [],
    templateUrl: './map-form-control.component.html',
})
export class MapFormControlComponent implements ControlValueAccessor {
    private readonly fb = inject(FormBuilder);
    private readonly mapOptions = inject(MAP_OPTIONS);
    protected readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    public readonly vm = input.required<MapFormControlVM>();
    protected readonly divSignal = signal<ElementRef<HTMLElement> | null>(null);
    private readonly targetArea = signal<Coordinates[] | null>(null);

    protected readonly mapSignal = computed(() => {
        const canvas = this.divSignal();
        if (!canvas) return null;
        return new google.maps.Map(canvas.nativeElement);
    });

    private readonly targetAreaCenter = computed<Coordinates | null>(() => {
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

    protected readonly mapCenter = computed<Coordinates>(
        () =>
            this.targetAreaCenter() ??
            this.vm().defaultCenter ??
            this.headOfficeLocation
    );

    protected readonly setMapCenterEffect = effect(
        () => {
            const map = this.mapSignal();
            if (!map) return;
            map.setCenter(this.mapCenter());
            this.setMapCenterEffect.destroy();
        },
        { manualCleanup: true }
    );

    protected mapForm = this.fb.group({
        targetArea: this.fb.control<Coordinates[] | null>(
            null,
            Validators.required
        ),
        entryPoint: this.fb.control<Coordinates | null>(
            null,
            Validators.required
        ),
    });

    private readonly setMapOptionsEffect = effect(() => {
        const map = this.mapSignal();
        if (!map) return;

        map.setOptions({
            ...this.mapOptions,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT,
            },
        });
    });

    protected setMapBounds(bounds: google.maps.LatLngBounds | null) {
        const map = this.mapSignal();
        if (!bounds || !map) return;
        map.fitBounds(bounds);
    }

    private readonly mapFormValue: Signal<{
        targetArea: Coordinates[] | null;
        entryPoint: Coordinates | null;
    }> = toSignal(
        this.mapForm.valueChanges.pipe(
            distinctUntilChanged(),
            map((data) => {
                const { entryPoint, targetArea } = data;
                return {
                    entryPoint: entryPoint ?? null,
                    targetArea: targetArea ?? null,
                };
            })
        ),
        { initialValue: { targetArea: null, entryPoint: null } }
    );

    private readonly mapFormValueEffect = effect(() =>
        this.onChange(this.mapFormValue())
    );

    private onChange: (value: {
        targetArea: Coordinates[] | null;
        entryPoint: Coordinates | null;
    }) => void = () => {};

    private onTouched: () => void = () => {};

    public writeValue(value: {
        targetArea: Coordinates[] | null;
        entryPoint: Coordinates | null;
    }) {
        this.mapForm.setValue(value);
        this.targetArea.set(value.targetArea);
    }

    public registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
