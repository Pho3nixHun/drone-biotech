import {
    Directive,
    effect,
    inject,
    input,
    WritableSignal,
} from '@angular/core';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { EntryPointXVM } from './draw-entry-points.model';

@Directive({
    selector: '[appDrawEntryPoints]',
})
export class DrawEntryPointsDirective {
    private readonly hostComponent = inject(GoogleMapComponent, {
        optional: true,
        host: true,
    });
    public readonly entryPoints = input.required<EntryPointXVM[] | null>();

    public readonly drawnEntryPoints =
        input.required<
            WritableSignal<google.maps.marker.AdvancedMarkerElement[] | null>
        >();

    private readonly drawEntryPointsEffect = effect(() => {
        if (!this.hostComponent) return;
        const map = this.hostComponent.mapSignal();
        const entryPoints = this.entryPoints();

        if (!map || !entryPoints) return this.drawnEntryPoints().set(null);

        const points = entryPoints.map(
            (point) =>
                new google.maps.marker.AdvancedMarkerElement({
                    map,
                    ...point.options,
                    position: point.position,
                })
        );
        this.drawnEntryPoints().set(points);
    });
}
