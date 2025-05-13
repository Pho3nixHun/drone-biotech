import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Place } from './auto-complete.model';
import { isNotNull } from '@utils/is-null.typeguard';
import {
    Coordinates,
    METRES_TO_KILOMETERS,
} from '@stores/location/location.model';

@Injectable({
    providedIn: 'root',
})
export class AutoCompleteService {
    public getPlaces(
        place: string,
        origin: Coordinates | null
    ): Observable<Place[]> {
        const request: google.maps.places.AutocompleteRequest = {
            input: place,
            origin: origin ?? undefined,
            includedRegionCodes: ['hu'],
        };
        return from(
            google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
                request
            )
        ).pipe(
            map((predictions) =>
                predictions.suggestions
                    .map((prediction) => {
                        const place = prediction.placePrediction;
                        return place
                            ? {
                                  description: place.text.text,
                                  placeId: place.placeId,
                                  distance: place.distanceMeters
                                      ? place.distanceMeters /
                                        METRES_TO_KILOMETERS
                                      : null,
                              }
                            : null;
                    })
                    .filter(isNotNull)
            )
        );
    }

    public getLocationByPlaceId(
        placeId: string
    ): Observable<google.maps.LatLngBounds | null> {
        const service = new google.maps.Geocoder();
        return from(
            service.geocode({
                placeId,
            })
        ).pipe(
            map((data) => {
                if (data.results.length >= 1) {
                    const location = data.results[0].geometry.viewport;
                    return location;
                }
                return null;
            })
        );
    }
}
