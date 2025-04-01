import { TestBed } from '@angular/core/testing';
import { OrdersNewPageService } from './orders-new-page.service';
import {
    ordersNewPageVMDefault,
    ordersNewPageVMMock,
} from './orders-new-page.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectActualPosition } from 'src/app/stores/location/location.selectors';
import { StoreModule } from '@ngrx/store';
import { updateVMSignal } from './orders-new-page.service.mock';
import { toSignal } from '@angular/core/rxjs-interop';
import { OrdersNewPageVM } from './orders-new-page-vm.model';

describe('OrdersNewPageService', () => {
    let service: OrdersNewPageService;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot([])],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectActualPosition,
                            value: { lat: 10, lng: 10 },
                        },
                    ],
                }),
            ],
        });
        store = TestBed.inject(MockStore);
        service = TestBed.inject(OrdersNewPageService);
    });

    //Snapshot test
    it('should return the computed ordersNewPageVMDefault when the getVM() function is called', () => {
        // Arrange
        updateVMSignal(ordersNewPageVMDefault);
        store.overrideSelector(selectActualPosition, { lat: 0, lng: 0 });

        const vm = service.getVM();

        const asd: OrdersNewPageVM = {
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
                            defaultCenter: { lat: 10, lng: 10 },
                        },
                        mapPointSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapPointSelectFormControlVM,
                            defaultCenter: { lat: 10, lng: 10 },
                        },
                    },
                    editAreaDataDialogVM: {
                        ...ordersNewPageVMDefault.frameXVM
                            .areasDataFormControlVM.addAreaDataDialogVM,
                        mapAreaSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapAreaSelectFormControlVM,
                            defaultCenter: { lat: 10, lng: 10 },
                        },
                        mapPointSelectFormControlVM: {
                            ...ordersNewPageVMDefault.frameXVM
                                .areasDataFormControlVM.addAreaDataDialogVM
                                .mapPointSelectFormControlVM,
                            defaultCenter: { lat: 10, lng: 10 },
                        },
                    },
                },
            },
        };
        // Act

        //Assert
        expect(vm()).toEqual(asd);
    });
});
