import { computed, Injectable, Signal, signal } from '@angular/core';
import {
    OrdersNewPageVM,
    OrdersNewPageVMWithConfig,
} from './orders-new-page-vm.model';
import { OrdersNewPageService } from './orders-new-page.service';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageMockService {
    public getVM(): Signal<OrdersNewPageVMWithConfig | undefined> {
        return computed(() => {
            const signalValue = vmSignal();
            if (!signalValue) {
                return undefined;
            }

            return {
                frameXVM: {
                    titleKey: signalValue.frameXVM.titleKey,
                    submitButtonTitleKey:
                        signalValue.frameXVM.submitButtonTitleKey,
                    deleteControlButtonText:
                        signalValue.frameXVM.deleteControlButtonText,
                    drawingControlOptions: { drawingModes: [] },
                    mapOptions: {
                        ...signalValue.frameXVM.mapOptions,
                    },
                    polygonOptions: {},
                },
            };
        });
    }
}

export const updateVMSignal = (vm: OrdersNewPageVM | undefined) => {
    vmSignal.set(vm);
};

const vmSignal = signal<OrdersNewPageVM | undefined>(undefined);

export const provideOrdersNewPageMock = () => ({
    provide: OrdersNewPageService,
    useClass: OrdersNewPageMockService,
});
