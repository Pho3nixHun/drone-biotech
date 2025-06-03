import {
    Directive,
    ElementRef,
    HostListener,
    inject,
    input,
} from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
    private readonly elementRef = inject(ElementRef);
    public readonly attachedCallback = input.required<() => void>();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: HTMLElement) {
        if (!this.elementRef.nativeElement.contains(targetElement))
            this.attachedCallback()();
    }
}
