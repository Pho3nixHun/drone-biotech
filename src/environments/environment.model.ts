import { FirebaseOptions } from '@angular/fire/app';
import { Libraries } from '@googlemaps/js-api-loader';

export interface Environment {
    googleMaps: {
        apiKey: string;
        version: 'weekly';
        libraries: Libraries;
    };
    firebase: FirebaseOptions;
}
