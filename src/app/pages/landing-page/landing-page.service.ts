import { inject, Injectable, Signal, signal } from '@angular/core';
import { isProductFrame, LandingPageVM } from './landing-page-vm.model';
import { landingPageVMDefault } from './landing-page.mock';
import { ProductsService } from '@services/products/products.service';

@Injectable({
    providedIn: 'root',
})
export class LandingPageService {
    private readonly productsService = inject(ProductsService);
    public getVM(): Signal<LandingPageVM> {
        return signal({
            ...landingPageVMDefault,
            frameXVMs: landingPageVMDefault.frameXVMs.map((frame) => {
                if (isProductFrame(frame)) {
                    return {
                        ...frame,
                        productItemXVMs: this.productsService.getAllProducts(),
                    };
                }
                return frame;
            }),
        });
    }
}
