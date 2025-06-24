/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { noop, Subject } from 'rxjs';
import { DialogRef } from './dialog.service';

@Injectable({
    providedIn: 'any',
})
export class DialogServiceMock {
    public create(_vm: unknown, _component: unknown): DialogRef {
        return {
            result$: dialogResponse.asObservable(),
            close: () => noop,
            open: () => noop,
            onClose: () => noop,
            result: () => noop,
            portal: undefined,
            resultSubject$: new Subject(),
        } as unknown as DialogRef;
    }
}

// Using Subject instead of signal to avoid requiring an initial value
const dialogResponse = new Subject<unknown>();

export const updateDialogResponse = (response: unknown) =>
    dialogResponse.next(response);
