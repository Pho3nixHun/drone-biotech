import { Component, input, signal } from '@angular/core';
import { MapInitializerDirective } from '@directives/map-initializer/map-initializer.directive';
import { GoogleMapVM } from './google-map.model';

@Component({
    selector: 'app-google-map',
    imports: [MapInitializerDirective],
    templateUrl: './google-map.component.html',
})
export class GoogleMapComponent {
    public readonly vm = input.required<GoogleMapVM>();
    public readonly mapSignal = signal<google.maps.Map | null>(null);
}
