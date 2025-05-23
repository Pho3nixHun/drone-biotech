import { Provider } from '@angular/core';
import {
    ENTRY_POINT_MARKER_OPTIONS,
    INFO_WINDOW_OPTIONS,
    MAP_OPTIONS,
    POLYGON_OPTIONS,
} from '@providers/google-maps-provider';

export const ORDERS_NEW_PAGE_PROVIDERS: Provider[] = [
    {
        provide: MAP_OPTIONS,
        useValue: {
            mapTypeId: 'roadmap',
            disableDoubleClickZoom: true,
            clickableIcons: false,
            mapId: 'DEMO_MAP_ID',
            zoom: 14,
            streetViewControl: false,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT,
            },
        },
    },
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
        provide: ENTRY_POINT_MARKER_OPTIONS,
        useValue: {
            gmpDraggable: true,
        },
    },

    {
        provide: INFO_WINDOW_OPTIONS,
        useValue: {
            disableAutoPan: true,
            headerDisabled: true,
        },
    },
];
