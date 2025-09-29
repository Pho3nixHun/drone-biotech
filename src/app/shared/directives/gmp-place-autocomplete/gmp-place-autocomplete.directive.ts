import {
    Directive,
    inject,
    InjectionToken,
    OnDestroy,
    OnInit,
    output,
} from '@angular/core';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import { ControlPosition } from '@interfaces/control-position.enum';

@Directive({
    selector: '[appGmpPlaceAutocomplete]',
})
export class GmpPlaceAutocompleteDirective implements OnInit, OnDestroy {
    protected readonly options = inject(GMP_PLACE_AUTOCOMPLETE_OPTIONS);
    private readonly mapComponent = inject(GmpMapComponent, { host: true });
    protected readonly locationChange = output<LocationChange>();
    private readonly searchBar =
        new google.maps.places.PlaceAutocompleteElement({
            requestedLanguage: this.options.requestedLanguage,
            requestedRegion: this.options.requestedRegion,
        });

    ngOnInit() {
        this.mapComponent
            .map()
            .controls[
                google.maps.ControlPosition.TOP_LEFT
            ].push(this.searchBar);
        this.searchBar.addEventListener('gmp-select', this.selectListener);
    }

    protected selectListener = async (event: Event) => {
        if (!isPlacePredictionSelectEvent(event)) return;

        try {
            const viewPort = await event.placePrediction
                .toPlace()
                .fetchFields({
                    fields: ['viewport'],
                })
                .then((place) => place.place.viewport);

            if (viewPort) this.locationChange.emit({ viewPort });
        } catch (err) {
            console.error('Failed to fetch place viewport', err);
        }
    };
    ngOnDestroy(): void {
        this.searchBar.removeEventListener('gmp-select', this.selectListener);
        const controls =
            this.mapComponent.map().controls[
                google.maps.ControlPosition.TOP_LEFT
            ];
        const index = controls.getArray().indexOf(this.searchBar);
        if (index > -1) controls.removeAt(index);
    }
}

interface LocationChange {
    viewPort: google.maps.LatLngBounds;
}

const isPlacePredictionSelectEvent = (
    event: Event
): event is PlacePredictionSelectEvent => 'placePrediction' in event;

interface PlacePredictionSelectEvent extends Event {
    placePrediction: google.maps.places.PlacePrediction;
}

export interface GmpPlaceAutocompleteXVM {
    slot: ControlPosition;
}

interface GmpPlaceAutocompleteOptions
    extends Exclude<
        google.maps.places.PlaceAutocompleteElementOptions,
        'requestedLanguage' | 'requestedRegion'
    > {
    requestedLanguage: 'hu';
    requestedRegion: 'hu';
    unitSystem: 'metric' | 'imperial';
}

export const GMP_PLACE_AUTOCOMPLETE_OPTIONS =
    new InjectionToken<GmpPlaceAutocompleteOptions>(
        'Injection token for GMP Place Autocomplete Options'
    );

export const provideMockGmpPlaceAutocompleteOptions = () => ({
    provide: GMP_PLACE_AUTOCOMPLETE_OPTIONS,
    useValue: {},
});
