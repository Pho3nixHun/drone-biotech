import { Inject, Injectable } from '@angular/core';
import {
    DRAWING_CONTROL_OPTIONS,
    MAP_OPTIONS,
    POLYGON_OPTIONS,
} from './maps-config-vm.model';

@Injectable({
    providedIn: 'root',
})
export class MapsConfigService {
    constructor(
        @Inject(DRAWING_CONTROL_OPTIONS)
        private readonly drawingControlOptions: google.maps.drawing.DrawingControlOptions,
        @Inject(MAP_OPTIONS)
        private readonly mapOptions: google.maps.MapOptions,
        @Inject(POLYGON_OPTIONS)
        private readonly polygonOptions: google.maps.PolygonOptions
    ) {}

    getDrawingControlOptions(): google.maps.drawing.DrawingControlOptions {
        return this.drawingControlOptions;
    }

    getMapOptions(): google.maps.MapOptions {
        return this.mapOptions;
    }

    getPolygonOptions(): google.maps.PolygonOptions {
        return this.polygonOptions;
    }
}
