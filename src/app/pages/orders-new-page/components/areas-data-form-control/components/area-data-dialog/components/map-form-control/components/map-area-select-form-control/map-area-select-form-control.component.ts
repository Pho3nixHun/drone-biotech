import {
    Component,
    computed,
    effect,
    forwardRef,
    inject,
    input,
} from '@angular/core';
import { MapAreaSelectFormControlVM } from './map-area-select-form-control.model';
import {
    Coordinates,
    SQUARE_METRES_TO_HECTARE,
} from '@stores/location/location.model';
import {
    ControlValueAccessor,
    FormBuilder,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { coordinatesStringValidator } from '@utils/array-length.validator';
import { getAreaOfPolygon, getCenter } from 'geolib';
import {
    mapCoordinatesToString,
    mapStringToCoordinates,
} from '../../map-form-control.model';
import { map } from 'rxjs';
import { POLYGON_OPTIONS } from '@providers/google-maps-provider';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

@Component({
    selector: 'app-map-area-select-form-control',
    imports: [TranslocoModule, NgClass, ReactiveFormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapAreaSelectFormControlComponent),
            multi: true,
        },
        {
            provide: MapAreaSelectFormControlService,
            deps: [POLYGON_OPTIONS],
        },
    ],
    templateUrl: './map-area-select-form-control.component.html',
})
export class MapAreaSelectFormControlComponent implements ControlValueAccessor {
    private readonly translocoService = inject(TranslocoService);
    public readonly mapRef = input.required<google.maps.Map | null>();
    public readonly vm = input.required<MapAreaSelectFormControlVM>();
    private readonly fb = inject(FormBuilder);
    private readonly areaSelectService = inject(
        MapAreaSelectFormControlService
    );

    private readonly initializeMapEffect = effect(
        () => {
            const map = this.mapRef();
            if (!map) return;
            this.areaSelectService.initializeMap(map);
            this.initializeMapEffect.destroy();
        },
        { manualCleanup: true }
    );

    protected readonly polygonPathsSignal = toSignal(
        this.areaSelectService.polygonPaths$,
        { initialValue: null }
    );

    private readonly polygonCoordinatesEffect = effect(() =>
        this.onChange(this.polygonPathsSignal())
    );

    private readonly coordinatesToString = computed(() => {
        const paths = this.polygonPathsSignal();
        return paths ? mapCoordinatesToString(paths) : '';
    });

    private readonly setCoordinatesControlValueEffect = effect(() =>
        this.coordinatesControl.setValue(this.coordinatesToString())
    );

    protected readonly coordinatesControl = this.fb.control<string>('', [
        Validators.required,
        coordinatesStringValidator(3),
    ]);

    private readonly coordinatesFormControlValueSignal = toSignal(
        this.coordinatesControl.valueChanges.pipe(map((data) => data ?? '')),
        { initialValue: '' }
    );

    protected readonly canBeEdited = computed(() => {
        const coords = this.coordinatesToString();
        const control = this.coordinatesFormControlValueSignal();

        if (this.coordinatesControl.invalid) return false;
        return coords !== control;
    });

    private readonly setInfoWindowEffect = effect(() => {
        const center = this.polygonCenterSignal();
        const size = this.areSizeInHaSignal();
        if (!center || !size) return;

        this.areaSelectService.setInfoWindow(
            this.translocoService.translate(this.vm().areaValueKey, {
                value: size,
            }),
            center
        );
    });

    private readonly polygonCenterSignal = computed(() => {
        const polygon = this.polygonPathsSignal();
        if (!polygon) return null;
        const center = getCenter(polygon);

        if (!center) return null;

        return { lat: center.latitude, lng: center.longitude };
    });

    private readonly areSizeInHaSignal = computed(() => {
        const polygon = this.polygonPathsSignal();
        return polygon
            ? getAreaOfPolygon(polygon) / SQUARE_METRES_TO_HECTARE
            : null;
    });

    protected drawPolygon(coordinates: Coordinates[] | null) {
        this.areaSelectService.drawPolygon(coordinates);
    }

    protected deletePolygon() {
        this.areaSelectService.deletePolygon();
    }
    protected editPolygon() {
        if (this.coordinatesControl.valid)
            this.areaSelectService.editPolygon(
                mapStringToCoordinates(this.coordinatesControl.value ?? '')
            );
    }

    private onChange: (value: Coordinates[] | null) => void = noop;

    private onTouched: () => void = noop;

    public writeValue(value: Coordinates[] | null) {
        if (value) return this.areaSelectService.drawPolygon(value);
        this.areaSelectService.deletePolygon();
    }

    public registerOnChange(fn: (value: Coordinates[] | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
