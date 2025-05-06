/* eslint-disable @typescript-eslint/no-empty-function */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { Coordinates } from '../../area-data-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import { MapPointSelectFormControlVM } from './map-point-select-form-control.model';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ElementRefDirective } from '@directives/element-ref.directive';
import { HEAD_OFFICE_LOCATION } from '@services/distance/distance.model';
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

@Component({
    selector: 'app-map-point-select-form-control',
    imports: [TranslocoModule, NgClass, ElementRefDirective],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapPointSelectFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './map-point-select-form-control.component.html'
})
export class MapPointSelectFormControlComponent
    implements ControlValueAccessor
{
    private readonly mapPointSelectFormControlService = inject(
        MapPointSelectFormControlService
    );
    public readonly vm = input.required<MapPointSelectFormControlVM>();
    private readonly writeEntryPointSignal = signal<Coordinates | null>(null);

    protected readonly entryPoint = computed<Coordinates | null>(() => {
        const entryPointFromService = this.entryPointSignal();
        return entryPointFromService ?? null;
    });

    private readonly entryPointSignal = toSignal(
        this.mapPointSelectFormControlService.editEntryPoint$
    );

    protected readonly entryPointEffect = effect(() => {
        this.onChange(this.entryPoint());
    });

    private readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);

    private readonly center = computed<Coordinates>(() => {
        const writtenEntryPoint = this.writeEntryPointSignal();
        const defaultCenter = this.vm().defaultCenter;

        return writtenEntryPoint ?? defaultCenter ?? this.headOfficeLocation;
    });

    protected readonly mapInitializer = async (
        mapCanvas: ElementRef<HTMLDivElement> | null
    ) => {
        if (!mapCanvas) return;
        this.mapPointSelectFormControlService.initializeMap(
            mapCanvas.nativeElement,
            { center: this.center() },
            this.writeEntryPointSignal()
        );
    };

    protected drawMarker(coordinates: Coordinates | null) {
        this.mapPointSelectFormControlService.drawMarker(coordinates);
    }

    protected deleteMarker() {
        this.mapPointSelectFormControlService.deleteMarker();
    }

    private onChange: (value: Coordinates | null) => void = () => {};
    private onTouched: () => void = () => {};

    writeValue(value: Coordinates): void {
        this.writeEntryPointSignal.set(value);
    }

    registerOnChange(fn: (value: Coordinates | null) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
