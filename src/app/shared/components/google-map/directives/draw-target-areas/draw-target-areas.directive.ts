import { Directive, effect, inject, input } from '@angular/core';
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

    private readonly drawnTargetAreasEffect = effect(() => {
        if (!this.hostComponent) return;
        const map = this.hostComponent.mapSignal();
        const targetAreas = this.targetAreas();

        if (!map || !targetAreas) return;

        return targetAreas.map(
            (area) =>
                new google.maps.Polygon({
                    map,
                    ...area.options,
                    paths: area.coordinates,
                })
        );
    });
}
