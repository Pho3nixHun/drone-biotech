import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import { Component, effect, forwardRef, inject, input } from '@angular/core';
import { Coordinates } from '@stores/location/location.model';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import { TranslocoModule } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { POLYGON_OPTIONS } from '@providers/google-maps-provider';
import { noop } from 'rxjs';

/**
 * MapAreaSelectFormControlComponent
 *
 * Scope:
 * - A form control that handle the relevant information about the target area.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 */

@Component({
    selector: 'app-map-area-select-form-control',
    imports: [TranslocoModule, ReactiveFormsModule],
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
    template: '',
})
export class MapAreaSelectFormControlComponent implements ControlValueAccessor {
    public readonly mapRef = input.required<google.maps.Map | null>();
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

    protected drawPolygon(coordinates: Coordinates[] | null) {
        this.areaSelectService.drawPolygon(coordinates);
    }

    protected deletePolygon() {
        this.areaSelectService.deletePolygon();
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
