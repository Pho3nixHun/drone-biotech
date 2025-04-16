/**
 * Directive to get the ElementRef of anything into a Subject.
 * Saves you from having to write the boilerplate code to get the ElementRef of a specific element.
 */
import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    inject,
} from '@angular/core';

@Directive({
    selector: '[appElementRef]',
    standalone: true,
})
export class ElementRefDirective<T> implements AfterViewInit {
    @Input('appElementRef')
    public attachedCallback!: (element: ElementRef<T> | null) => void;

    private readonly elementRef: ElementRef<T> = inject(ElementRef);
    public ngAfterViewInit(): void {
        this.attachedCallback(this.elementRef);
    }
}
