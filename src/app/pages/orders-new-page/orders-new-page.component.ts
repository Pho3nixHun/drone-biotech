import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FrameComponent } from '@components/frame/frame.component';
import { OrdersNewPageService } from './orders-new-page.service';
import { LocationStoreModule } from 'src/app/stores/location/location.module';
import { TranslocoModule } from '@jsverse/transloco';
import { AreasDataFormControlComponent } from './components/areas-data-form-control/areas-data-form-control.component';
import { AreaData } from './components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { ORDERS_NEW_PAGE_PROVIDERS } from './orders-new-page.config';

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
    imports: [
        NgClass,
        ReactiveFormsModule,
        TranslocoModule,
        LocationStoreModule,
        FrameComponent,
        AreasDataFormControlComponent,
        PageLayoutComponent,
    ],
    templateUrl: './orders-new-page.component.html',
    providers: [ORDERS_NEW_PAGE_PROVIDERS],
})
export class OrdersNewPageComponent {
    private readonly ordersService = inject(OrdersNewPageService);
    private readonly fb = inject(FormBuilder);
    protected readonly vm = this.ordersService.getVM();

    public areasDataFormGroup = this.fb.group({
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

    protected submitForm() {
        if (this.areasDataFormGroup.valid) {
            this.areasDataFormGroup.reset();
        }
    }
}
