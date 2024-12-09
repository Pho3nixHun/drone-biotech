import { Component, inject } from '@angular/core';
import { FrameComponent } from '@components/frame/frame.component';
import { OrdersNewPageService } from './orders-new-page.service';
import { TranslocoModule } from '@jsverse/transloco';
import { minArrayLength } from '@utils/array-length.validator';
import { NgClass } from '@angular/common';
import { MapsComponent } from '@components/maps/maps.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

/**
 * OrdersNewPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a page that contains a form to handle Google Maps coordinates.
 * - Passes relevant data, like config, texts.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-map` components.
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
        NgClass,
        MapsComponent,
    ],
    templateUrl: './orders-new-page.component.html',
})
export class OrdersNewPageComponent {
    private readonly ordersService = inject(OrdersNewPageService);
    protected vm = this.ordersService.getVM();

    coordinatesForm = new FormGroup({
        coordinates: new FormControl<google.maps.LatLngLiteral[]>(
            [],
            [Validators.required, minArrayLength(3)]
        ),
    });

    resetForm() {
        this.coordinatesForm.reset({ coordinates: [] });
    }

    sendCoordinates() {
        if (this.coordinatesForm.valid) {
            console.log(this.coordinatesForm.getRawValue());
            this.coordinatesForm.reset({ coordinates: [] });
        }
    }
}
