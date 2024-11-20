import { Injectable, InjectionToken, signal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';
import { ProductsPageService } from './products-page.service';
import { ActivatedRoute } from '@angular/router';

const getVMSignal = signal<ProductsPageVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class ProductsPageMockService {
    public getVM = () => getVMSignal;
}

export const provideProductsPageMockService = () => ({
    provide: ProductsPageService,
    useClass: ProductsPageMockService,
});

export const updateGetVMSignal = (vm: ProductsPageVM | undefined) =>
    getVMSignal.set(vm);

export const ACTIVATED_ROUTE_TOKEN = new InjectionToken<ActivatedRoute>(
    'Mocking the id of the ActivatedRoute'
);

const routeSignal = signal<string | string[] | null | undefined>(undefined);

export const updateRouteSignal = (
    route: string | string[] | null | undefined
) => {
    routeSignal.set(route);
};

export const provideActivatedRoute = () => ({
    provide: ACTIVATED_ROUTE_TOKEN,
    useValue: {
        snapshot: {
            params: {
                get id() {
                    return routeSignal();
                },
            },
        },
    },
});
