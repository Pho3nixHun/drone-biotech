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
import { GMP_POLYGON_OPTIONS } from '@tokens/gmp-polygon-options.token';
import {
    getCenter,
    getCoordinates,
    Polygon,
    PolygonChangeEvent,
    PolygonsChangeEvent,
} from './gmp-polygon-drawing.model';
import { isNotUndefined } from '@utils/is-undefined.typeguard';
import isEqual from 'lodash/isEqual';
import { getAreaOfPolygon } from 'geolib';
import { SQUARE_METRES_TO_HECTARE } from '@stores/location/location.model';
import { PolygonContextMenu } from './gmp-polygon-context-menu.class';
import { PolygonContextMenuVM } from '@components/polygon-context-menu/polygon-context-menu.component';

type PolygonEditable = PolygonContextMenuVM | false;

@Directive({
    selector: '[appGmpPolygonDrawing]',
})
export class GmpPolygonDrawingDirective {
    private readonly options = inject(GMP_POLYGON_OPTIONS);
    private readonly map = inject(GmpMapComponent, { host: true });
    public readonly polygonEditable = input<PolygonEditable>(false);
    public readonly polygonChange = output<PolygonChangeEvent>();
    public readonly polygonsChange = output<PolygonsChangeEvent>();
    public readonly polygonInput = input<Polygon | null>(null);
    public readonly polygonsInput = input<Polygon[] | null>(null);
    private readonly contextMenu = new PolygonContextMenu(
        inject(EnvironmentInjector),
        inject(ApplicationRef)
    );

    private readonly polygon: google.maps.Polygon = new google.maps.Polygon({
        ...this.options,
        paths: [[]],
    });
    private readonly polygons: google.maps.MVCArray<google.maps.Polygon> =
        new google.maps.MVCArray();

    // Effect for 1 polygon
    private readonly polygonEffect = effect(() => {
        const map = this.map.map();
        const editable = this.polygonEditable();

        const polygonInput = this.polygonInput();
        const currentPath = this.polygon.getPath();

        const currentCoordinates = currentPath && getCoordinates(currentPath);
        if (
            polygonInput &&
            isEqual(currentCoordinates, polygonInput.coordinates)
        )
            return;

        currentPath.clear();

        if (!polygonInput)
            return this.polygonChange.emit({
                action: 'delete',
                coordinates: null,
                metadata: {
                    bounds: null,
                    center: null,
                },
            });

        const isEditable = !!editable;
        this.polygon.setOptions({
            fillColor: polygonInput.colors.fillColor,
            strokeColor: polygonInput.colors.strokeColor,
            paths: polygonInput.coordinates,
            editable: isEditable,
            clickable: isEditable,
            draggable: isEditable,
            geodesic: isEditable,
            map,
        });

        ['insert_at', 'remove_at', 'set_at'].forEach((event) => {
            const path = this.polygon.getPath();
            path.addListener(event, () => {
                const hasLength = path.getLength() > 0;
                const coordinates = getCoordinates(path);
                this.polygonChange.emit({
                    action: hasLength ? 'edit' : 'delete',
                    coordinates,
                    metadata: {
                        bounds: null,
                        center: hasLength ? getCenter(coordinates) : null,
                        sizeInHq:
                            getAreaOfPolygon(coordinates) /
                            SQUARE_METRES_TO_HECTARE,
                    },
                });
            });
        });

        this.polygonChange.emit({
            action: 'draw',
            coordinates: polygonInput.coordinates,
            metadata: {
                bounds: polygonInput.coordinates.reduce(
                    (acc, curr) => acc.extend(curr),
                    new google.maps.LatLngBounds()
                ),
                center: getCenter(polygonInput.coordinates),
                sizeInHq:
                    getAreaOfPolygon(polygonInput.coordinates) /
                    SQUARE_METRES_TO_HECTARE,
            },
        });

        const contextMenuVM = editable;
        if (!contextMenuVM) return;
        this.polygon.addListener(
            'mouseup',
            (event: google.maps.PolyMouseEvent) => {
                if (isNotUndefined(event.vertex))
                    this.contextMenu.open(
                        this.map.map(),
                        this.polygon.getPath(),
                        event.vertex,
                        contextMenuVM
                    );
            }
        );
    });

    // Effect for polygon array
    private readonly polygonsEffect = effect(() => {
        const map = this.map.map();
        const editable = this.polygonEditable();
        const polygonsInput = this.polygonsInput();

        const currentPath = this.polygons
            .getArray()
            .map((p) => getCoordinates(p.getPath()));

        const currentCoordinates = polygonsInput
            ? polygonsInput.map((p) => p.coordinates)
            : null;
        if (isEqual(currentCoordinates, currentPath)) return;

        this.polygons.clear();

        if (!polygonsInput)
            return this.polygonsChange.emit({
                action: 'delete',
                coordinates: null,
                metadata: {
                    bounds: null,
                },
            });

        const isEditable = !!editable;
        polygonsInput.forEach((curr) => {
            const polygon = new google.maps.Polygon({
                ...this.options,
                fillColor: curr.colors.fillColor,
                strokeColor: curr.colors.strokeColor,
                paths: curr.coordinates,
                clickable: isEditable,
                draggable: isEditable,
                geodesic: isEditable,
                editable: isEditable,
                map,
            });

            const path = polygon.getPath();
            ['insert_at', 'remove_at', 'set_at'].forEach((event) => {
                path.addListener(event, () => {
                    const coordinates = this.polygons
                        .getArray()
                        .map((polygon) => getCoordinates(polygon.getPath()));

                    this.polygonsChange.emit({
                        action: path.getLength() > 0 ? 'edit' : 'delete',
                        coordinates,
                        metadata: { bounds: null },
                    });
                });
            });
            this.polygons.push(polygon);
        });

        this.polygonsChange.emit({
            action: 'draw',
            coordinates: this.polygons
                .getArray()
                .map((polygon) => getCoordinates(polygon.getPath())),
            metadata: {
                bounds: null,
            },
        });
    });
}
