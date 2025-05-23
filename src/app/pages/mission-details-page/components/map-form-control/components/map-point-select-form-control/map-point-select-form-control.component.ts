import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { TranslocoModule } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { Coordinates } from '@stores/location/location.model';
import { Component, effect, forwardRef, inject, input } from '@angular/core';
import { ENTRY_POINT_MARKER_OPTIONS } from '@providers/google-maps-provider';
import { noop } from 'rxjs';

/**
 * MapPointSelectFormControlComponent
 *
 * Scope:
 * - A form control that handle the relevant information about the entry point.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 *
 */
@Component({
    selector: 'app-map-point-select-form-control',
    imports: [TranslocoModule],
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
    template: '',
})
export class MapPointSelectFormControlComponent
    implements ControlValueAccessor
{
    private readonly pointSelectService = inject(
        MapPointSelectFormControlService
    );
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
