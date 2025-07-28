/* eslint-disable @typescript-eslint/no-empty-function */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { TranslocoModule } from '@jsverse/transloco';
import { MapPointSelectFormControlVM } from './map-point-select-form-control.model';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Coordinates } from '@stores/location/location.model';
import { Component, effect, forwardRef, inject, input } from '@angular/core';
import { ENTRY_POINT_MARKER_OPTIONS } from 'src/app/shared/providers/google-maps-provider';

const noop = () => {};

@Component({
    selector: 'app-map-point-select-form-control',
    imports: [TranslocoModule, NgClass],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapPointSelectFormControlComponent),
            multi: true,
        },
        {
            provide: MapPointSelectFormControlService,
            deps: [ENTRY_POINT_MARKER_OPTIONS],
        },
    ],
    templateUrl: './map-point-select-form-control.component.html',
})
export class MapPointSelectFormControlComponent
    implements ControlValueAccessor
{
    private readonly pointSelectService = inject(
        MapPointSelectFormControlService
    );
    public readonly vm = input.required<MapPointSelectFormControlVM>();
    public readonly mapRef = input<google.maps.Map | null>();

    private readonly initializeMapEffect = effect(
        () => {
            const map = this.mapRef();
            if (!map) return;
            this.pointSelectService.initializeMap(map);
            this.initializeMapEffect.destroy();
        },
        { manualCleanup: true }
    );

    protected readonly entryPointSignal = toSignal(
        this.pointSelectService.entryPointMarkerPath$,
        { initialValue: null }
    );

    protected readonly entryPointEffect = effect(() => {
        this.onChange(this.entryPointSignal());
    });

    protected drawMarker(coordinates: Coordinates | null) {
        this.pointSelectService.drawMarker(coordinates);
    }
    protected deleteMarker() {
        this.pointSelectService.deleteMarker();
    }

    private onChange: (value: Coordinates | null) => void = noop;
    private onTouched: () => void = noop;

    public writeValue(value: Coordinates | null): void {
        if (value) return this.pointSelectService.drawMarker(value);
        this.pointSelectService.deleteMarker();
    }

    public registerOnChange(fn: (value: Coordinates | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
