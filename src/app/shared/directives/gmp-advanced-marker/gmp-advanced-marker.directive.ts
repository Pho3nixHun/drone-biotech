import {
    Directive,
    inject,
    input,
    output,
    OnInit,
    OnDestroy,
    effect,
} from '@angular/core';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import {
    Coordinates,
    mapLatLngToCoordinates,
} from '@stores/location/location.model';

interface MarkerChange {
    position: Coordinates | null;
}

@Directive({
    selector: '[appGmpAdvancedMarker]',
})
export class GmpAdvancedMarkerDirective implements OnInit, OnDestroy {
    private readonly mapComponent = inject(GmpMapComponent, { host: true });
    private readonly advancedMarker =
        new google.maps.marker.AdvancedMarkerElement();

    public readonly position = input<Coordinates | null>(null, {
        alias: 'appGmpAdvancedMarker',
    });
    public readonly editable = input<boolean>(false, {
        alias: 'markerEditable',
    });
    public readonly markerChange = output<MarkerChange>();

    private readonly dragendListener = (event: google.maps.MapMouseEvent) => {
        const latLng = event.latLng;
        this.markerChange.emit({
            position: latLng ? mapLatLngToCoordinates(latLng) : null,
        });
    };

    ngOnInit(): void {
        this.advancedMarker.addListener('dragend', this.dragendListener);
    }

    private readonly setOptionsEffect = effect(
        () => (this.advancedMarker.gmpDraggable = this.editable())
    );

    setMarkerEffect = effect(() => {
        const position = this.position();
        if (!position) {
            this.advancedMarker.position = null;
            this.advancedMarker.map = null;
            return;
        }
        this.advancedMarker.position = position;
        this.advancedMarker.map = this.mapComponent.map();
    });

    ngOnDestroy(): void {
        this.advancedMarker.removeEventListener(
            'dragend',
            () => this.dragendListener
        );
        this.advancedMarker.map = null;
    }
}
