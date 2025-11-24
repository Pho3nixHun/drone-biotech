import { NgModule } from '@angular/core';
import { GMP_MAP_OPTIONS } from '@components/gmp-map/gmp-map.model';
import { GMP_PLACE_AUTOCOMPLETE_OPTIONS } from '@directives/gmp-place-autocomplete/gmp-place-autocomplete.directive';
import { GMP_POLYGON_OPTIONS } from '@tokens/gmp-polygon-options.token';
import { HEAD_OFFICE_LOCATION } from '@tokens/head-office-location.token';

@NgModule({
    providers: [
        {
            provide: HEAD_OFFICE_LOCATION,
            useValue: { lat: 47.312498121576795, lng: 21.309304570654604 },
        },
        {
            provide: GMP_MAP_OPTIONS,
            useValue: {
                mapId: 'DEMO_MAP_ID',
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                streetViewControl: false,
                mapTypeControl: false,
            },
        },
        {
            provide: GMP_POLYGON_OPTIONS,
            useValue: {
                fillOpacity: 0.5,
                strokeOpacity: 1,
                strokeWeight: 2,
            },
        },
        {
            provide: GMP_PLACE_AUTOCOMPLETE_OPTIONS,
            useValue: {
                requestedLanguage: 'hu',
                requestedRegion: 'hu',
                unitSystem: 'metric',
            },
        },
    ],
})
export class GoogleMapsModule {}
