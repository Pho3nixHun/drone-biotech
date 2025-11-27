import { Directive } from '@angular/core';

@Directive({
    selector: '[appGmpInfoWindow]',
    exportAs: 'gmpInfoWindow',
})
export class GmpInfoWindowDirective {
    public readonly infoWindow = new google.maps.InfoWindow({
        disableAutoPan: true,
        headerDisabled: true,
    });
}
