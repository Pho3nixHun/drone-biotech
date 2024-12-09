import { inject, Injectable, Signal, signal } from '@angular/core';
import { MapsConfigService } from '@services/maps-config/maps-config.service';
import { OrdersNewPageVMWithConfig } from './orders-new-page-vm.model';
import { ordersNewPageVMDefault } from './orders-new-page.mock';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageService {
    private readonly mapsConfigService = inject(MapsConfigService);

    public getVM(): Signal<OrdersNewPageVMWithConfig> {
        return signal({
            frameXVM: {
                titleKey: ordersNewPageVMDefault.frameXVM.titleKey,
                submitButtonTitleKey:
                    ordersNewPageVMDefault.frameXVM.submitButtonTitleKey,
                deleteControlButtonText:
                    ordersNewPageVMDefault.frameXVM.deleteControlButtonText,
                drawingControlOptions:
                    this.mapsConfigService.getDrawingControlOptions(),
                mapOptions: {
                    ...this.mapsConfigService.getDrawingControlOptions(),
                    ...ordersNewPageVMDefault.frameXVM.mapOptions,
                },
                polygonOptions: this.mapsConfigService.getPolygonOptions(),
            },
        });
    }
}
