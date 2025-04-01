import { signal } from '@angular/core';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';

export const provideMockDialogRef = () => ({
    provide: DIALOG_REF,
    useValue: {
        close: jest.fn(),
        open: jest.fn(),
    },
});

export const provideMockDialogDataFactory = () => ({
    provide: DIALOG_DATA,
    useFactory: () => dialogDataSignal(),
});

const dialogDataSignal = signal<unknown>(undefined);

export const updateDialogDataSignal = (vm: unknown) => dialogDataSignal.set(vm);
