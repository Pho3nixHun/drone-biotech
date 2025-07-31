import { Directive, effect, input, WritableSignal } from '@angular/core';
import { TargetAreaXVM } from 'src/app/pages/order-details-page/order-details-page.model';

@Directive({
    selector: '[appDrawTargetAreas]',
})
export class DrawTargetAreasDirective {
    public readonly mapRef = input.required<google.maps.Map | null>();
    public readonly targetAreas = input.required<TargetAreaXVM[] | null>();
    public readonly drawnPolygons =
        input.required<WritableSignal<google.maps.Polygon[] | null>>();

    private readonly drawTargetAreasEffect = effect(() => {
        const map = this.mapRef();
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
