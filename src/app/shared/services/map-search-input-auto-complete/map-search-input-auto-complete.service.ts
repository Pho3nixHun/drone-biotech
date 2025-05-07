import { Injectable } from '@angular/core';
import { Place } from './map-search-input-auto-complete.model';
import { from, map, Observable } from 'rxjs';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { isNotNull } from '@utils/is-null.typeguard';

@Injectable({
    providedIn: 'root',
})
export class MapSearchInputAutoCompleteService {
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
                                      ? place.distanceMeters / 1000
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
