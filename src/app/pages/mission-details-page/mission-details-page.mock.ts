import { MissionDetailsPageVM } from './mission-details-page.model';

export const missionDetailsPageVM: MissionDetailsPageVM = {
    googleMapXVM: {
        center: { lat: 47.277, lng: 21.2343 },
        mapOptions: {
            mapTypeId: 'roadmap',
            disableDoubleClickZoom: true,
            clickableIcons: false,
            mapId: 'DEMO_MAP_ID',
            zoom: 14,
            streetViewControl: false,
        },
        entryPointXVMs: [
            {
                options: {},
                position: { lat: 47.277, lng: 21.2343 },
            },
        ],
        targetAreaXVMs: [
            {
                options: {
                    clickable: false,
                    draggable: false,
                    editable: false,
                    fillOpacity: 0.5,
                    strokeColor: 'green',
                    fillColor: 'green',
                },
                coordinates: [
                    { lat: 47.277, lng: 21.2345 },
                    { lat: 47.276, lng: 21.2345 },
                    { lat: 47.276, lng: 21.233 },
                    { lat: 47.277, lng: 21.233 },
                ],
            },
        ],
    },
};
