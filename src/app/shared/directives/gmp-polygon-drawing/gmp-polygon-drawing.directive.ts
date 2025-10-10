import {
    Directive,
    input,
    output,
    effect,
    inject,
    EnvironmentInjector,
    ApplicationRef,
} from '@angular/core';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import {
    Coordinates,
    mapLatLngToCoordinates,
    mapMVCArrayToLatLngArray,
    SQUARE_METRES_TO_HECTARE,
} from '@stores/location/location.model';
import isEqual from 'lodash/isEqual';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import { GMP_POLYGON_OPTIONS } from '@tokens/gmp-polygon-options.token';
import { getAreaOfPolygon, getCenter } from 'geolib';
import { isBoolean } from '@utils/is-boolean.typeguard';
import { isNotUndefined } from '@utils/is-undefined.typeguard';
import { PolygonContextMenu } from './gmp-polygon-context-menu.class';
import { PolygonContextMenuVM } from '@components/polygon-context-menu/polygon-context-menu.component';

const getCoordinates = flow(
    mapMVCArrayToLatLngArray,
    map(mapLatLngToCoordinates)
);

export interface PolygonChangeEvent {
    coordinates: Coordinates[] | null;
    action: 'draw' | 'edit' | 'delete' | 'move' | 'remove';
    metadata: {
        center: Coordinates | null;
        sizeInHq: number | null;
        perimeter?: number;
    };
}

@Directive({
    selector: '[appGmpPolygonDrawing]',
})
export class GmpPolygonDrawingDirective {
    private readonly contextMenu = new PolygonContextMenu(
        inject(EnvironmentInjector),
        inject(ApplicationRef)
    );
    private readonly options = inject(GMP_POLYGON_OPTIONS);
    private readonly mapComponent = inject(GmpMapComponent, { host: true });
    public readonly coordinates = input<Coordinates[] | null>(null);
    public readonly contextMenuVM = input<PolygonContextMenuVM>();
    public readonly editable = input<boolean>(false);
    public readonly polygonChange = output<PolygonChangeEvent>();

    private readonly polygon = new google.maps.Polygon({
        ...this.options,
        paths: [[]],
    });

    private readonly setMapEffect = effect(() => {
        this.polygon.setMap(this.mapComponent.map());
    });

    private readonly editableEffect = effect(() => {
        const contextMenuVM = this.contextMenuVM();
        const editable = this.editable();
        this.polygon.setOptions({
            editable,
            geodesic: editable,
            draggable: editable,
            clickable: editable,
        });
        if (!contextMenuVM) return;
        this.polygon.addListener(
            'mouseup',
            (event: google.maps.PolyMouseEvent) => {
                const vertex = event.vertex;
                if (isNotUndefined(vertex))
                    this.contextMenu.open(
                        this.mapComponent.map(),
                        this.polygon.getPath(),
                        vertex,
                        contextMenuVM
                    );
            }
        );
    });

    private readonly coordinatesEffect = effect(() => {
        const coordinates = this.coordinates();

        const currentPath = this.polygon.getPath();
        const currentCoordinates = currentPath && getCoordinates(currentPath);
        if (isEqual(currentCoordinates, coordinates)) return;

        currentPath?.clear();
        if (coordinates === null)
            return this.polygonChange.emit({
                coordinates,
                action: 'delete',
                metadata: { center: null, sizeInHq: 0 },
            });

        this.polygon.setPath(coordinates);
        const newPath = this.polygon.getPath();
        newPath.addListener('insert_at', () =>
            this.updatePolygonCoordinatesFromMap(newPath)
        );
        newPath.addListener('remove_at', () =>
            this.updatePolygonCoordinatesFromMap(newPath)
        );
        newPath.addListener('set_at', () =>
            this.updatePolygonCoordinatesFromMap(newPath)
        );

        const center = getCenter(coordinates);
        this.polygonChange.emit({
            coordinates,
            action: 'draw',
            metadata: {
                center: isBoolean(center)
                    ? null
                    : { lat: center.latitude, lng: center.longitude },
                sizeInHq:
                    getAreaOfPolygon(coordinates) / SQUARE_METRES_TO_HECTARE,
            },
        });
    });

    private updatePolygonCoordinatesFromMap(
        path: google.maps.MVCArray<google.maps.LatLng>
    ): void {
        const coordinates = getCoordinates(path);
        const center = getCenter(coordinates);
        this.polygonChange.emit({
            coordinates,
            action: coordinates.length > 0 ? 'edit' : 'delete',
            metadata: {
                center: isBoolean(center)
                    ? null
                    : { lat: center.latitude, lng: center.longitude },
                sizeInHq:
                    getAreaOfPolygon(coordinates) / SQUARE_METRES_TO_HECTARE,
            },
        });
    }
}
