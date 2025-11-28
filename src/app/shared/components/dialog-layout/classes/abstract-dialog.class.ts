import { signal } from '@angular/core';

/**
 * AbstractDialog
 *
 * Defines a base abstraction for dialog components.
 * Provides an abstraction for opening, submitting, and cancelling dialogs.
 */
export abstract class AbstractDialog<VM = unknown> {
    protected readonly vm = signal<VM | null>(null);
    public abstract open(vm: VM): void;
    protected abstract submit(): void;
    protected abstract cancel(): void;
}
