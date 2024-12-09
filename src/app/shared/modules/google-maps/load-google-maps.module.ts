import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiKeys } from 'src/environments/api-keys';

@NgModule({
    declarations: [],
    imports: [CommonModule],
})
export class LoadGoogleMapsModule {
    constructor() {
        this.loadGoogleMaps();
    }

    private isLoaded(): boolean {
        return (
            typeof google !== 'undefined' && typeof google.maps !== 'undefined'
        );
    }

    private loadGoogleMaps(): void {
        if (!this.isLoaded()) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKeys.googleMapsApiKey}&v=weekly&libraries=places,drawing&loading=async`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }
}
