import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import {
    Component,
    effect,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import { Coordinates } from '@stores/location/location.model';
import { TranslocoModule } from '@jsverse/transloco';
import { noop } from 'rxjs';
import { MapAreaSelectService } from './map-area-select.service';
import { POLYGON_OPTIONS } from 'src/app/shared/providers/google-maps-provider';

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
            provide: MapAreaSelectService,
            deps: [POLYGON_OPTIONS],
        },
    ],
    template: '',
})
export class MapAreaSelectFormControlComponent implements ControlValueAccessor {
    public readonly mapRef = input.required<google.maps.Map | null>();
    private readonly mapAreaSelectService = inject(MapAreaSelectService);
    private readonly targetArea = signal<Coordinates[] | null>(null);

    private readonly targetAreaEffect = effect(() => {
        const targetArea = this.targetArea();
        return targetArea
            ? this.mapAreaSelectService.drawPolygon(targetArea)
            : this.mapAreaSelectService.deletePolygon();
    });

    private readonly initializeMapEffect = effect(
        () => {
            const map = this.mapRef();
            if (!map) return;
            this.mapAreaSelectService.initializeMap(map);
            this.initializeMapEffect.destroy();
        },
        { manualCleanup: true }
    );

    protected drawPolygon(coordinates: Coordinates[] | null) {
        this.mapAreaSelectService.drawPolygon(coordinates);
    }

    protected deletePolygon() {
        this.mapAreaSelectService.deletePolygon();
    }

    public writeValue(value: Coordinates[] | null) {
        this.targetArea.set(value);
    }
    private onChange: (value: Coordinates[] | null) => void = noop;

    private onTouched: () => void = noop;

    public registerOnChange(fn: (value: Coordinates[] | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
