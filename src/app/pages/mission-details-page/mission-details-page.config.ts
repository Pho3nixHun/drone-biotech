import { Provider } from '@angular/core';
import {
    POLYGON_OPTIONS,
    MAP_OPTIONS,
    ENTRY_POINT_MARKER_OPTIONS,
} from '@providers/google-maps-provider';

export const MISSION_DETAILS_PAGE_PROVIDERS: Provider[] = [
    {
        provide: POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: false,
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
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT,
            },
        },
    },
    {
        provide: ENTRY_POINT_MARKER_OPTIONS,
        useValue: {
            gmpDraggable: false,
        },
    },
];
