import {
    Component,
    computed,
    contentChild,
    effect,
    ElementRef,
    inject,
    input,
    signal,
    viewChild,
} from '@angular/core';
import {
    Coordinates,
    mapLatLngToCoordinates,
} from '@stores/location/location.model';
import { GMP_MAP_OPTIONS } from './gmp-map.model';
import { StackComponent } from '@components/stack/stack.component';

@Component({
    selector: 'app-gmp-map',
    template: '<div #mapDiv style="height: 100%"><ng-content /></div>',
})
export class GmpMapComponent {
    private readonly divElement =
        viewChild.required<ElementRef<HTMLDivElement>>('mapDiv');
    public readonly menu = contentChild(StackComponent, { read: ElementRef });
    private readonly options = inject(GMP_MAP_OPTIONS);
    public readonly interactive = input<boolean>(false);
    public readonly zoom = input<number>(14);
    public readonly view = input.required<
        Coordinates | google.maps.LatLngBounds
    >();
    public readonly actualCenter = signal<Coordinates | null>(null);
    public readonly map = computed(
        () => new google.maps.Map(this.divElement().nativeElement)
    );

    private readonly projectMenuEffect = effect(() => {
        const map = this.map();
        const menu = this.menu();
        if (!menu) return;
        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
            menu.nativeElement
        );
    });

    private readonly setViewEffect = effect(() => {
        const view = this.view();
        return view instanceof google.maps.LatLngBounds
            ? this.map().fitBounds(view)
            : this.map().setCenter(view);
    });

    private readonly setOptionsEffect = effect(() => {
        const map = this.map();
        const interactive = this.interactive();

        map.setOptions({
            ...this.options,
            zoom: this.zoom(),
            draggable: interactive,
            fullscreenControl: interactive,
            zoomControl: interactive,
            scrollwheel: interactive,
            disableDoubleClickZoom: !interactive,
            keyboardShortcuts: interactive,
            cameraControl: interactive,
        });

        map.addListener('idle', () => {
            const center = map.getCenter();
            this.actualCenter.set(
                center ? mapLatLngToCoordinates(center) : null
            );
        });
    });
}
