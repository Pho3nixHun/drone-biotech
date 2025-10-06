import {
    Component,
    computed,
    contentChild,
    effect,
    ElementRef,
    inject,
    InjectionToken,
    input,
    signal,
    viewChild,
} from '@angular/core';
import {
    Coordinates,
    mapLatLngToCoordinates,
} from '@stores/location/location.model';

@Component({
    selector: 'app-gmp-map',
    imports: [],
    template: '<div #mapDiv style="height: 100%"><ng-content /></div>',
})
export class GmpMapComponent {
    private readonly options = inject(GMP_MAP_OPTIONS);
    private readonly divElement =
        viewChild.required<ElementRef<HTMLDivElement>>('mapDiv');
    public readonly buttons =
        contentChild<ElementRef<HTMLDivElement>>('buttons');
    public readonly center = input.required<Coordinates>();
    public readonly zoom = input<number>(14);
    public readonly actualCenter = signal<Coordinates | null>(null);

    public readonly map = computed(
        () => new google.maps.Map(this.divElement().nativeElement)
    );

    public readonly projectButtonsEffect = effect(() => {
        const map = this.map();
        const buttons = this.buttons();
        if (!buttons) return;
        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
            buttons.nativeElement
        );
    });

    private readonly setOptionsEffect = effect(() => {
        const map = this.map();
        map.setOptions({
            ...this.options,
            center: this.center(),
            zoom: this.zoom(),
        });
        map.addListener('idle', () => {
            const center = map.getCenter();
            this.actualCenter.set(
                center ? mapLatLngToCoordinates(center) : null
            );
        });
    });
}

export interface GmpMapOptions
    extends Omit<
        google.maps.MapOptions,
        | 'mapId'
        | 'mapTypeId'
        | 'clickableIcons'
        | 'mapTypeControl'
        | 'streetViewControl'
        | 'disableDoubleClickZoom'
    > {
    mapId: 'DEMO_MAP_ID';
    mapTypeId: 'roadmap';
}

export const GMP_MAP_OPTIONS = new InjectionToken<GmpMapOptions>(
    'Injection Token for GMP Map options'
);

export const provideMockGmpMapOptions = () => ({
    provide: GMP_MAP_OPTIONS,
    useValue: {},
});
