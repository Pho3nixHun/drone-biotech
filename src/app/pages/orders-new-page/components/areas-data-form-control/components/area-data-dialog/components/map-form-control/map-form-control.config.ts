import { EnvironmentProviders, Provider } from '@angular/core';
import { HEAD_OFFICE_LOCATION } from '@services/distance/distance.model';
import {
    GOOGLE_MAPS_LOADER_CONFIG,
    provideGoogleMapsLibraries,
} from 'src/app/shared/providers/google-maps-provider';
import { environment } from 'src/environments/environment';
import {
    POLYGON_OPTIONS,
    INFO_WINDOW_OPTIONS,
} from './components/map-area-select-form-control/map-area-select-form-control.model';
import { ENTRY_POINT_MARKER_OPTIONS } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { MAP_OPTIONS } from './map-form-control.model';

export const mapFormControlConfig: (Provider | EnvironmentProviders)[] = [
    provideGoogleMapsLibraries(),
    {
        provide: POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: true,
            fillOpacity: 0.5,
            strokeColor: 'blue',
            fillColor: 'blue',
        },
    },
    {
        provide: MAP_OPTIONS,
        useValue: {
            mapTypeId: 'roadmap',
            disableDoubleClickZoom: true,
            clickableIcons: false,
            mapId: 'DEMO_MAP_ID',
            zoom: 14,
            streetViewControl: false,
        },
    },
    {
        provide: ENTRY_POINT_MARKER_OPTIONS,
        useValue: {
            gmpDraggable: true,
        },
    },
    {
        provide: GOOGLE_MAPS_LOADER_CONFIG,
        useValue: {
            url: 'https://maps.googleapis.com/maps/api/js?',
            key: environment.googleMapsConfig.apiKey,
            version: '3.59',
            region: 'HU',
        },
    },
    {
        provide: HEAD_OFFICE_LOCATION,
        useValue: { lat: 47.312498121576795, lng: 21.309304570654604 },
    },
    {
        provide: INFO_WINDOW_OPTIONS,
        useValue: {
            disableAutoPan: true,
            headerDisabled: true,
        },
    },
];
