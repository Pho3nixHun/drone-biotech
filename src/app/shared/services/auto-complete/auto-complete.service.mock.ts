/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Place } from './auto-complete.model';
import { isNotNull } from '@utils/is-null.typeguard';
import { AutoCompleteService } from './auto-complete.service';
import { METRES_TO_KILOMETERS } from '@stores/location/location.model';

export const placesMock = {
    suggestions: [
        {
            placePrediction: {
                text: { text: 'Budapest' },
                placeId: 'id1',
                distanceMeters: 23000,
            },
        },
        {
            placePrediction: {
                text: { text: 'Budapest, Parlament' },
                placeId: 'id2',
                distanceMeters: 25000,
            },
        },
    ],
};

@Injectable({
    providedIn: 'root',
})
export class AutoCompleteServiceMock {
    public getPlaces(): Observable<Place[]> {
        return of(placesMock).pipe(
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
        return of({
            results: [
                {
                    geometry: {
                        viewport: new google.maps.LatLngBounds({
                            lat: 10,
                            lng: 10,
                        }),
                    },
                },
            ],
        }).pipe(
            map((data) =>
                data.results.length >= 1
                    ? data.results[0].geometry.viewport
                    : null
            )
        );
    }
}

export const provideAutoCompleteServiceMock = () => ({
    provide: AutoCompleteService,
    useClass: AutoCompleteServiceMock,
});
