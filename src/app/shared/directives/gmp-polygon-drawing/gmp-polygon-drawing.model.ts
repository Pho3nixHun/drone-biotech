import {
    mapMVCArrayToLatLngArray,
    mapLatLngToCoordinates,
    Coordinates,
} from '@stores/location/location.model';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import { isBoolean } from '@utils/is-boolean.typeguard';
import { getCenter as geolibGetCenter } from 'geolib';

interface GeolibLatLng {
    longitude: number;
    latitude: number;
}
type GeolibCenter = GeolibLatLng | false;

export const mapGeolibCenter = (center: GeolibCenter): Coordinates | null =>
    isBoolean(center) ? null : { lat: center.latitude, lng: center.longitude };

export const getCenter = flow(geolibGetCenter, mapGeolibCenter);

export const getCoordinates = flow(
    mapMVCArrayToLatLngArray,
    map(mapLatLngToCoordinates)
);

type ChangeAction = 'draw' | 'edit' | 'delete' | 'move' | 'remove';

export interface PolygonChangeEvent {
    action: ChangeAction;
    coordinates: TargetArea | null;
    metadata: {
        center: Coordinates | null;
        sizeInHq?: number;
        perimeter?: number;
    };
}

export interface PolygonsChangeEvent {
    action: ChangeAction;
    coordinates: TargetArea[] | null;
    metadata: {
        bounds: google.maps.LatLngBounds | null;
    };
}

export enum PolygonColor {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
}

export interface PolygonColors {
    fillColor: PolygonColor;
    strokeColor: PolygonColor;
}

type TargetArea = Coordinates[];

export interface Polygon {
    colors: PolygonColors;
    coordinates: TargetArea;
}
