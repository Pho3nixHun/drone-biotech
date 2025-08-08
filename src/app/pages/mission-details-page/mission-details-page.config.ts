import { ConfigProvider } from '@interfaces/config-provider';
import {
    POLYGON_OPTIONS,
    MAP_OPTIONS,
    ENTRY_POINT_MARKER_OPTIONS,
} from 'src/app/shared/providers/google-maps-provider';

export const missionDetailsPageConfig: ConfigProvider[] = [
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
                position: 23.0,
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
