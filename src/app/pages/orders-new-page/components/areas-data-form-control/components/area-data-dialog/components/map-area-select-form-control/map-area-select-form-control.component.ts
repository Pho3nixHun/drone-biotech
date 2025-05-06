import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import { MapAreaSelectFormControlVM } from './map-area-select-form-control.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import { Coordinates } from '../../area-data-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { getCenter } from 'geolib';
import { NgClass } from '@angular/common';
import { HEAD_OFFICE_LOCATION } from '@services/distance/distance.model';
import { ElementRefDirective } from '@directives/element-ref.directive';

@Component({
    selector: 'app-map-area-select-form-control',
    imports: [TranslocoModule, NgClass, ElementRefDirective],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapAreaSelectFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './map-area-select-form-control.component.html'
})
export class MapAreaSelectFormControlComponent implements ControlValueAccessor {
    public vm = input.required<MapAreaSelectFormControlVM>();
    private readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    private readonly mapAreaSelectFormControlService = inject(
        MapAreaSelectFormControlService
    );
    protected mapCanvas = signal<ElementRef<HTMLDivElement> | null>(null);
    public writeTargetAreaSignal = signal<Coordinates[] | null>(null);

    public readonly mapInitialize = (
        mapCanvas: ElementRef<HTMLDivElement> | null
    ) => {
        if (!mapCanvas) return;
        this.mapAreaSelectFormControlService.initializeMap(
            mapCanvas.nativeElement,
            { center: this.center() },
            this.writeTargetAreaSignal()
        );
    };

    protected center = computed<Coordinates>(() => {
        const writtenTargetArea = this.writeTargetAreaSignal();
        const defaultCenter = this.vm().defaultCenter;

        if (writtenTargetArea) {
            const center = getCenter(writtenTargetArea);
            if (center) return { lat: center.latitude, lng: center.longitude };
        }
        return defaultCenter ?? this.headOfficeLocation;
    });

    public targetArea = computed<Coordinates[] | null>(() => {
        return this.editPolygonSignal() ?? null;
    });

    private readonly editPolygonSignal = toSignal(
        this.mapAreaSelectFormControlService.editPolygon$
    );

    private readonly editTargetAreaEffect = effect(() => {
        this.onChange(this.targetArea());
    });

    public drawPolygon(coordinates: Coordinates[] | null) {
        this.mapAreaSelectFormControlService.drawPolygon(coordinates);
    }

    public deletePolygon() {
        this.mapAreaSelectFormControlService.deletePolygon();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private onChange: (value: Coordinates[] | null) => void = () => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private onTouched: () => void = () => {};

    writeValue(value: Coordinates[] | null): void {
        this.writeTargetAreaSignal.set(value);
    }

    registerOnChange(fn: (value: Coordinates[] | null) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
