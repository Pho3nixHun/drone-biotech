import {
    AfterViewInit,
    Directive,
    ElementRef,
    inject,
    input,
    WritableSignal,
} from '@angular/core';
import { Coordinates } from '@stores/location/location.model';

@Directive({
    selector: '[appMapInitializer]',
})
export class MapInitializerDirective implements AfterViewInit {
    private readonly elementRef = inject(ElementRef<HTMLDivElement>);

    public mapSignal = input.required<WritableSignal<google.maps.Map | null>>();
    public mapOptions = input.required<google.maps.MapOptions>();
    public mapCenter = input.required<Coordinates>();

    public ngAfterViewInit() {
        const mapSignal = this.mapSignal()();
        if (mapSignal) return;
        const map = new google.maps.Map(this.elementRef.nativeElement);
        map.setOptions(this.mapOptions());
        map.setCenter(this.mapCenter());
        return this.mapSignal().set(map);
    }
}
