import { NgModule } from '@angular/core';
import { GMP_MAP_OPTIONS } from '@components/gmp-map/gmp-map.component';
import { GMP_PLACE_AUTOCOMPLETE_OPTIONS } from '@directives/gmp-place-autocomplete/gmp-place-autocomplete.directive';
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
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                streetViewControl: false,
                mapTypeControl: false,
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
