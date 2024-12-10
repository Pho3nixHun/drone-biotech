import { NgModule } from '@angular/core';
import { isNotUndefined } from '@utils/is-undefined.typeguard';
import { environment } from 'src/environments/environment';

@NgModule({})
export class LoadGoogleMapsModule {
    constructor() {
        this.loadGoogleMaps();
    }

    private isLoaded(): boolean {
        return isNotUndefined(google?.maps);
    }

    private loadGoogleMaps(): void {
        if (!this.isLoaded()) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsConfig.apiKey}&v=weekly&libraries=places,drawing&loading=async`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }
}
