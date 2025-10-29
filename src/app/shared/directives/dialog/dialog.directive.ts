import {
    Directive,
    ElementRef,
    output,
    signal,
    viewChild,
} from '@angular/core';

@Directive()
export abstract class DialogDirective<VM = unknown, R = unknown> {
    protected readonly vm = signal<VM | null>(null);
    public readonly response = output<R>();
    protected readonly myDialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('myDialog');

    public abstract open(vm: VM): void;
    public abstract submit(): void;
}
