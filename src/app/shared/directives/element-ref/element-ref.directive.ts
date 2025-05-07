/**
 * Directive to get the ElementRef of anything into a Subject.
 * Saves you from having to write the boilerplate code to get the ElementRef of a specific element.
 */
import {
    AfterViewInit,
    Directive,
    ElementRef,
    WritableSignal,
    inject,
    input,
} from '@angular/core';

@Directive({
    selector: '[appElementRef]',
})
export class ElementRefDirective<T> implements AfterViewInit {
    public signal = input.required<WritableSignal<ElementRef<T> | null>>();
    private readonly elementRef = inject(ElementRef<T>);

    public ngAfterViewInit() {
        return this.signal().set(this.elementRef);
    }
}
