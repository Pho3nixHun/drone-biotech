import { Component, computed, inject } from '@angular/core';
import { FrameComponent } from '@components/frame/frame.component';
import { OrdersNewPageService } from './orders-new-page.service';
import { TranslocoModule } from '@jsverse/transloco';
import { JsonPipe, NgClass } from '@angular/common';
import { AreaData } from './components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { AreasDataFormControlComponent } from './components/areas-data-form-control/areas-data-form-control.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationStoreModule } from 'src/app/stores/location/location.module';
import { Store } from '@ngrx/store';
import { LocationActions } from 'src/app/stores/location/location.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectActualPosition } from 'src/app/stores/location/location.selectors';
import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';

/**
 * OrdersNewPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a page that contains a complex form to handle new orders set by the customer.
 * - Passes relevant data, like config, texts.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
    selector: 'app-orders-new-page',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FrameComponent,
        TranslocoModule,
        AreasDataFormControlComponent,
        NgClass,
        JsonPipe,
        TranslocoModule,
        LocationStoreModule,
    ],
    templateUrl: './orders-new-page.component.html',
})
export class OrdersNewPageComponent {
    private readonly ordersService = inject(OrdersNewPageService);
    private readonly fb = inject(FormBuilder);
    private readonly store = inject(Store);
    private readonly dispatchLocation = this.store.dispatch(
        LocationActions.getLocation()
    );
    private readonly centerSignal = toSignal(
        this.store.select(selectActualPosition)
    );
    protected vm = this.ordersService.getVM();

    protected areasDataFormControlVM = computed<AreasDataFormControlVM>(() => {
        const vm = this.vm().frameXVM.areasDataFormControlVM;
        const center = this.centerSignal();
        return !center
            ? vm
            : {
                  ...vm,
                  addAreaDataDialogVM: {
                      ...vm.addAreaDataDialogVM,
                      mapAreaSelectFormControlVM: {
                          ...vm.addAreaDataDialogVM.mapAreaSelectFormControlVM,
                          defaultCenter: center,
                      },
                      mapPointSelectFormControlVM: {
                          ...vm.addAreaDataDialogVM.mapPointSelectFormControlVM,
                          defaultCenter: center,
                      },
                  },
                  editAreaDataDialogVM: {
                      ...vm.addAreaDataDialogVM,
                      mapAreaSelectFormControlVM: {
                          ...vm.addAreaDataDialogVM.mapAreaSelectFormControlVM,
                          defaultCenter: center,
                      },
                      mapPointSelectFormControlVM: {
                          ...vm.addAreaDataDialogVM.mapPointSelectFormControlVM,
                          defaultCenter: center,
                      },
                  },
              };
    });

    protected areasDataFormGroup = this.fb.group({
        internalOrderNumber: this.fb.control<string>('', Validators.required),
        contact: this.fb.group({
            name: this.fb.control<string>('', Validators.required),
            phoneNumber: this.fb.control<string>('', [Validators.required]),
            email: this.fb.control<string>('', [
                Validators.required,
                Validators.email,
            ]),
        }),
        endCustomer: this.fb.control<string>('', Validators.required),
        areasData: this.fb.control<AreaData[]>([], [Validators.required]),
    });

    submitForm() {
        if (this.areasDataFormGroup.valid) {
            this.areasDataFormGroup.reset({
                internalOrderNumber: '',
                contact: { email: '', name: '', phoneNumber: '' },
                endCustomer: '',
                areasData: [],
            });
        }
    }
}
