import { computed, inject, Injectable, Signal } from '@angular/core';
import { OrdersNewPageVM } from './orders-new-page-vm.model';
import { ordersNewPageVMDefault } from './orders-new-page.mock';
import { injectDispatch } from '@ngrx/signals/events';
import { LocationStore } from '@stores/location/location.store';
import { locationEvents } from '@stores/location/location.events';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageService {
    private readonly locationEvents = injectDispatch(locationEvents);
    private readonly locationStore = inject(LocationStore);
    private readonly dispatchLocation = this.locationEvents.getLocation();

    private readonly vm = computed<OrdersNewPageVM>(() => {
        const actualPosition = this.locationStore.actualPosition();
        return {
            ...ordersNewPageVMDefault,
            frameXVM: {
                ...ordersNewPageVMDefault.frameXVM,
                areasDataFormControlVM: {
                    ...ordersNewPageVMDefault.frameXVM.areasDataFormControlVM,
                    addAreaDataDialogVM: {
                        ...ordersNewPageVMDefault.frameXVM
                            .areasDataFormControlVM.addAreaDataDialogVM,
                        mapFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapFormControlVM,
                            defaultCenter: actualPosition,
                        },
                    },
                    editAreaDataDialogVM: {
                        ...ordersNewPageVMDefault.frameXVM
                            .areasDataFormControlVM.addAreaDataDialogVM,
                        mapFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapFormControlVM,
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
