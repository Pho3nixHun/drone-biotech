/* eslint-disable @typescript-eslint/no-empty-function */
import {
    AfterViewInit,
    Component,
    forwardRef,
    inject,
    input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GoogleMapsService } from '@services/google-maps/google-maps.service';
import { MapsConfigVM } from '@services/maps-config/maps-config-vm.model';

@Component({
    selector: 'app-maps',
    standalone: true,
    templateUrl: './maps.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapsComponent),
            multi: true,
        },
    ],
})
export class MapsComponent implements AfterViewInit, ControlValueAccessor {
    private readonly googleMapsService = inject(GoogleMapsService);
    public configVM = input.required<MapsConfigVM>();

    private onChange: (value: google.maps.LatLngLiteral[]) => void = () => {};
    private onTouched: () => void = () => {};

    ngAfterViewInit(): void {
        const mapCanvas = document.getElementById('map-canvas');
        if (!mapCanvas) {
            console.error('Map container not found.');
            return;
        }

        // Initialize map with the options
        this.googleMapsService.initializeMap(
            mapCanvas,
            this.configVM().mapOptions,
            this.configVM().drawingControlOptions,
            this.configVM().polygonOptions,
            (coordinates) => {
                this.onChange(coordinates);
            }
        );
    }

    writeValue(value: google.maps.LatLngLiteral[]): void {
        this.googleMapsService.deletePolygon(() => this.onChange(value));
    }

    registerOnChange(fn: (value: google.maps.LatLngLiteral[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
