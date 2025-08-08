import { Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { OrdersNewPageVM } from './orders-new-page.model';
import { ordersNewPageVMDefault } from './orders-new-page.mock';
import { selectActualPosition } from 'src/app/stores/location/location.selectors';
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

    private readonly vm: Observable<OrdersNewPageVM> = combineLatest([
        of(ordersNewPageVMDefault),
        this.actualPosition$,
    ]).pipe(
        map(([vm, position]) => ({
            ...vm,
            frameXVM: {
                ...vm.frameXVM,
                areasDataFormControlVM: {
                    ...vm.frameXVM.areasDataFormControlVM,
                    addAreaDataDialogVM: {
                        ...vm.frameXVM.areasDataFormControlVM
                            .addAreaDataDialogVM,
                        mapFormControlVM: {
                            ...vm.frameXVM.areasDataFormControlVM
                                .addAreaDataDialogVM.mapFormControlVM,
                            defaultCenter: position,
                        },
                    },
                    editAreaDataDialogVM: {
                        ...vm.frameXVM.areasDataFormControlVM
                            .addAreaDataDialogVM,
                        mapFormControlVM: {
                            ...vm.frameXVM.areasDataFormControlVM
                                .addAreaDataDialogVM.mapFormControlVM,
                            defaultCenter: position,
                        },
                    },
                },
            },
        }))
    );

    public getVM(): Observable<OrdersNewPageVM> {
        return this.vm;
    }
}
