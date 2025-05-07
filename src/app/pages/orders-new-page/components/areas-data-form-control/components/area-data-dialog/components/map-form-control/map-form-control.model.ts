import { MapSearchInputFormControlVM } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/components/map-form-control/components/map-search-input-form-control/map-search-input-form-control.model';
import { MapAreaSelectFormControlVM } from './components/map-area-select-form-control/map-area-select-form-control.model';
import { MapPointSelectFormControlVM } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { Coordinates } from '../../area-data-dialog.model';
import { InjectionToken } from '@angular/core';

export interface MapFormControlVM {
    defaultCenter: Coordinates | null;
    mapAreaSelectFormControlVM: MapAreaSelectFormControlVM;
    mapPointSelectFormControlVM: MapPointSelectFormControlVM;
    mapSearchInputFormControlVM: MapSearchInputFormControlVM;
}

export const MAP_OPTIONS = new InjectionToken<MapOptions>(
    'Injection Token for Map options'
);

export const provideMockMapOptions = () => ({
    provide: MAP_OPTIONS,
    useValue: {},
});
export interface MapOptions {
    mapTypeId: 'roadmap';
    disableDoubleClickZoom: boolean;
    clickableIcons: boolean;
    mapId: 'DEMO_MAP_ID';
    zoom: number;
    streetViewControl: boolean;
}

export const mapStringToCoordinates = (input: string): Coordinates[] => {
    const lines = input
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== ''); // ignore empty lines

    const coordinates: Coordinates[] = lines.map((line) => {
        const [lat, lng] = line.split(' ').map(Number);
        return { lat, lng };
    });

    return coordinates;
};

export const mapCoordinatesToString = (coordinates: Coordinates[]): string => {
    return coordinates.map((coord) => `${coord.lat} ${coord.lng}`).join('\n');
};
