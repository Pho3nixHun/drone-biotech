/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    GlobalPositionStrategy,
    Overlay,
    OverlayRef,
    ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, merge, skip } from 'rxjs';
import { selectURL } from 'src/app/stores/router/router.selectors';

export interface DialogReason {
    reasonType: 'submit' | 'cancel';
}
export class DialogRef<T = unknown> {
    private portal: Portal<unknown> | undefined;
    private readonly resultSubject$ = new Subject<T | void>();
    constructor(public onClose: (result?: T) => void) {}

    public open(portal: Portal<unknown>, overlayRef: OverlayRef) {
        this.portal = portal;
        if (!overlayRef?.hasAttached()) {
            overlayRef?.attach(this.portal);
        }
    }

    public close(result?: T): void {
        this.resultSubject$.next(result);
        this.resultSubject$.complete();
        this.onClose(result);
    }

    public set result(value: T) {
        this.resultSubject$.next(value);
    }

    public get result$(): Observable<T | void> {
        return this.resultSubject$.asObservable();
    }
}

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');
export const DIALOG_REF = new InjectionToken<DialogRef>('DIALOG_REF');

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    private readonly overlay = inject(Overlay);
    private readonly store = inject(Store);

    private readonly routerEvent$ = this.store.select(selectURL);
    private readonly overlayRef = this.overlay.create({
        hasBackdrop: true,
        positionStrategy: this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically(),
        scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    create<VM, R = any>(
        viewModel: VM,
        component: any,
        scrollStrategy?: ScrollStrategy,
        positionStrategy?: GlobalPositionStrategy,
        close$: Observable<void> = this.routerEvent$.pipe(
            skip(1),
            map(() => void 0)
        )
    ): DialogRef<R> {
        if (positionStrategy) {
            this.overlayRef.updatePositionStrategy(positionStrategy);
        }
        if (scrollStrategy) {
            this.overlayRef.updateScrollStrategy(scrollStrategy);
        }
        const dialogRef = new DialogRef<R>(() => {
            this.overlayRef?.detach();
        });

        const injector = Injector.create({
            providers: [
                {
                    provide: DIALOG_DATA,
                    useValue: viewModel,
                },
                {
                    provide: DIALOG_REF,
                    useValue: dialogRef,
                },
            ],
        });
        const dialogPortal = new ComponentPortal(component, null, injector);

        dialogRef.open(dialogPortal, this.overlayRef);

        merge(this.overlayRef?.backdropClick(), close$).subscribe(() => {
            dialogRef.close();
        });

        return dialogRef;
    }
}
