import {
    ACTIVE_MISSION_POLYGON_OPTIONS,
    COMPLETED_MISSION_POLYGON_OPTIONS,
} from 'src/app/shared/providers/google-maps-provider';
import { ConfigProvider } from '@interfaces/config-provider';

export const orderDetailsPageConfig: ConfigProvider[] = [
    {
        provide: ACTIVE_MISSION_POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: false,
            fillOpacity: 0.5,
            strokeColor: 'green',
            fillColor: 'green',
        },
    },
    {
        provide: COMPLETED_MISSION_POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: false,
            fillOpacity: 0.5,
            strokeColor: 'orange',
            fillColor: 'orange',
        },
    },
];
