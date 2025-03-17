import { FirebaseOptions } from '@angular/fire/app';

export interface Environment {
    googleMapsConfig: {
        apiKey: string;
    };
    firebaseConfig: FirebaseOptions;
}
