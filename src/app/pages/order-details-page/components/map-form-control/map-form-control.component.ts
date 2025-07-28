import {
    Component,
    computed,
    effect,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormBuilder,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { noop } from 'rxjs';
import { getCenter } from 'geolib';
import { AreaFormControlComponent } from './components/area-form-control/area-form-control.component';
import { TargetArea } from '../../order-details-page.model';
import { MAP_OPTIONS } from 'src/app/shared/providers/google-maps-provider';
import { MapFormControlVM, MissionStats } from './map-form-control.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { InfoItemListComponent } from '@components/info-panel/components/info-item-list/info-item-list.component';
import { InfoItemComponent } from '@components/info-panel/components/info-item-list/components/info-item/info-item.component';
import { MapInitializerDirective } from '@directives/map-initializer/map-initializer.directive';

@Component({
    selector: 'app-map-form-control',
    imports: [
        AreaFormControlComponent,
        ReactiveFormsModule,
        TranslocoModule,
        InfoItemListComponent,
        InfoItemComponent,
        MapInitializerDirective,
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

    public vm = input.required<MapFormControlVM>();

    protected readonly mapSignal = signal<google.maps.Map | null>(null);

    protected readonly mapFormGroup = this.fb.group({
        targetAreas: this.fb.control<TargetArea[] | null>(null),
    });

    private readonly targetAreas = toSignal(
        this.mapFormGroup.controls.targetAreas.valueChanges
    );

    protected readonly missionStats = computed<MissionStats | null>(() => {
        const totalMissions = this.targetAreas();
        if (!totalMissions) return null;

        const remainingMissions = totalMissions.filter(
            (area) => area.type === 'active'
        );

        return {
            totalMissions: totalMissions.length,
            remainingMissions: remainingMissions.length,
            completedMissions: totalMissions.length - remainingMissions.length,
        };
    });

    protected readonly mapCenter = computed<Coordinates | null>(() => {
        const areas = this.targetAreas();
        if (!areas) return null;

        const center = getCenter(areas.flatMap((area) => area.coordinates));
        return center
            ? {
                  lat: center.latitude,
                  lng: center.longitude,
              }
            : null;
    });

    protected readonly setMapCenterEffect = effect(() => {
        const map = this.mapSignal();
        const center = this.mapCenter();
        if (!map || !center) return;
        map.setCenter(center);
        this.setMapCenterEffect.destroy();
    });

    public writeValue(targetAreas: TargetArea[]) {
        this.mapFormGroup.setValue({ targetAreas });
    }

    private onChange: (value: TargetArea[]) => void = () => noop;

    private onTouched: () => void = () => noop;

    public registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
