import { HEAD_OFFICE_LOCATION } from '@services/distance/distance.model';
import {
    GOOGLE_MAPS_LOADER_CONFIG,
    INFO_WINDOW_OPTIONS,
    MAP_OPTIONS,
    POLYGON_OPTIONS,
    provideGoogleMapsLibraries,
} from 'src/app/shared/providers/google-maps-provider';
import { environment } from 'src/environments/environment';
import { ENTRY_POINT_MARKER_OPTIONS } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { ConfigProvider } from '@interfaces/config-provider';

export const mapFormControlConfig: ConfigProvider[] = [
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
