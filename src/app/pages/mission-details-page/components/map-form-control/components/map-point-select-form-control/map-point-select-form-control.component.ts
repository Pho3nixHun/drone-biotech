import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { Coordinates } from '@stores/location/location.model';
import {
    Component,
    effect,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import { noop } from 'rxjs';
import { MapPointSelectService } from './map-point-select.service';
import { ENTRY_POINT_MARKER_OPTIONS } from 'src/app/shared/providers/google-maps-provider';

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
            provide: MapPointSelectService,
            deps: [ENTRY_POINT_MARKER_OPTIONS],
        },
    ],
    template: '',
})
export class MapPointSelectFormControlComponent
    implements ControlValueAccessor
{
    public readonly mapRef = input<google.maps.Map | null>();
    private readonly mapPointSelectService = inject(MapPointSelectService);
    private readonly entryPoint = signal<Coordinates | null>(null);

    private readonly initializeMapEffect = effect(
        () => {
            const map = this.mapRef();
            if (!map) return;
            this.mapPointSelectService.initializeMap(map);
            this.initializeMapEffect.destroy();
        },
        { manualCleanup: true }
    );

    private readonly entryPointEffect = effect(() => {
        const entryPoint = this.entryPoint();
        return entryPoint
            ? this.mapPointSelectService.drawMarker(entryPoint)
            : this.mapPointSelectService.deleteMarker();
    });

    protected drawMarker(coordinates: Coordinates | null) {
        this.mapPointSelectService.drawMarker(coordinates);
    }
    protected deleteMarker() {
        this.mapPointSelectService.deleteMarker();
    }

    private onChange: (value: Coordinates | null) => void = noop;
    private onTouched: () => void = noop;

    public writeValue(value: Coordinates | null): void {
        this.entryPoint.set(value);
    }

    public registerOnChange(fn: (value: Coordinates | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
