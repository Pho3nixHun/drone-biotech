import { computed, inject, Injectable, Signal } from '@angular/core';
import { OrdersNewPageVM } from './orders-new-page-vm.model';
import { ordersNewPageVMDefault } from './orders-new-page.mock';
import { Store } from '@ngrx/store';
import { selectActualPosition } from 'src/app/stores/location/location.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { LocationActions } from 'src/app/stores/location/location.actions';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageService {
    private readonly store = inject(Store);
    private readonly dispatchLocation = this.store.dispatch(
        LocationActions.getLocation()
    );
    private readonly actualPosition$ = this.store.select(selectActualPosition);

    private readonly actualPositionSignal = toSignal(this.actualPosition$);

    private readonly vm = computed<OrdersNewPageVM>(() => {
        const actualPosition = this.actualPositionSignal() ?? null;
        return {
            ...ordersNewPageVMDefault,
            frameXVM: {
                ...ordersNewPageVMDefault.frameXVM,
                areasDataFormControlVM: {
                    ...ordersNewPageVMDefault.frameXVM.areasDataFormControlVM,
                    addAreaDataDialogVM: {
                        ...ordersNewPageVMDefault.frameXVM
                            .areasDataFormControlVM.addAreaDataDialogVM,
                        mapAreaSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapAreaSelectFormControlVM,
                            defaultCenter: actualPosition,
                        },
                        mapPointSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapPointSelectFormControlVM,
                            defaultCenter: actualPosition,
                        },
                    },
                    editAreaDataDialogVM: {
                        ...ordersNewPageVMDefault.frameXVM
                            .areasDataFormControlVM.addAreaDataDialogVM,
                        mapAreaSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapAreaSelectFormControlVM,
                            defaultCenter: actualPosition,
                        },
                        mapPointSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapPointSelectFormControlVM,
                            defaultCenter: actualPosition,
                        },
                    },
                },
            },
        };
    });

    public getVM(): Signal<OrdersNewPageVM> {
        return this.vm;
    }
}
