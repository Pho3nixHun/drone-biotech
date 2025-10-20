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

export interface AdvancedMarker {
    coordinates: Coordinates;
}

@Directive({
    selector: '[appGmpAdvancedMarker]',
})
export class GmpAdvancedMarkerDirective implements OnInit, OnDestroy {
    private readonly mapComponent = inject(GmpMapComponent, { host: true });
    private readonly advancedMarker =
        new google.maps.marker.AdvancedMarkerElement();

    public readonly marker = input<AdvancedMarker | null>(null, {
        alias: 'appGmpAdvancedMarker',
    });
    public readonly markerEditable = input<boolean>(false);
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
        () => (this.advancedMarker.gmpDraggable = this.markerEditable())
    );

    setMarkerEffect = effect(() => {
        const marker = this.marker();
        if (!marker) {
            this.advancedMarker.position = null;
            this.advancedMarker.map = null;
            return;
        }
        this.advancedMarker.position = marker.coordinates;
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
