import {
    AfterViewInit,
    Directive,
    ElementRef,
    inject,
    input,
    WritableSignal,
} from '@angular/core';

@Directive({
    selector: '[appMapInitializer]',
})
export class MapInitializerDirective implements AfterViewInit {
    private readonly elementRef = inject(ElementRef<HTMLDivElement>);

    public signal = input.required<WritableSignal<google.maps.Map | null>>();
    public mapOptions = input.required<google.maps.MapOptions>();

    public ngAfterViewInit() {
        const map = new google.maps.Map(this.elementRef.nativeElement);
        map.setOptions(this.mapOptions());
        return this.signal().set(map);
    }
}
