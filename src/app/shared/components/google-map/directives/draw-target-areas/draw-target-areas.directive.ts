import {
    Directive,
    effect,
    inject,
    input,
    WritableSignal,
} from '@angular/core';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { TargetAreaXVM } from './draw-target-areas.model';

@Directive({
    selector: '[appDrawTargetAreas]',
})
export class DrawTargetAreasDirective {
    private readonly hostComponent = inject(GoogleMapComponent, {
        optional: true,
        host: true,
    });
    public readonly targetAreas = input.required<TargetAreaXVM[] | null>();
    public readonly drawnPolygons =
        input.required<WritableSignal<google.maps.Polygon[] | null>>();

    private readonly drawTargetAreasEffect = effect(() => {
        if (!this.hostComponent) return;
        const map = this.hostComponent.mapSignal();
        const targetAreas = this.targetAreas();

        if (!map || !targetAreas) return this.drawnPolygons().set(null);

        const areas = targetAreas.map(
            (area) =>
                new google.maps.Polygon({
                    map,
                    ...area.options,
                    paths: area.coordinates,
                })
        );
        this.drawnPolygons().set(areas);
    });
}
