import {
    Mission,
    AreaDataDialogResponse,
    AreaDataDialogVM,
} from './area-data-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import {
    Component,
    effect,
    ElementRef,
    inject,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { v4 as uuidv4 } from 'uuid';
import { Coordinates } from '@stores/location/location.model';
import { ButtonComponent } from '@components/button/button.component';
import { InputNumberComponent } from '@components/input-number/input-number.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { MatIconModule } from '@angular/material/icon';
import { minArrayLengthValidator } from '@validators/min-array-length.validator';
import { PolygonFormControlComponent } from '@components/polygon-form-control/polygon-form-control.component';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import { AdvancedMarkerFormControlComponent } from '@components/advanced-marker-form-control/advanced-marker-form-control.component';
import { HEAD_OFFICE_LOCATION } from '@tokens/head-office-location.token';
import { GmpInfoWindowDirective } from '@directives/gmp-info-window/gmp-info-window.directive';
import { NgClass } from '@angular/common';
import { GmpPlaceAutocompleteDirective } from '@directives/gmp-place-autocomplete/gmp-place-autocomplete.directive';
import { GmpAdvancedMarkerDirective } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { GmpPolygonDrawingDirective } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.directive';
import { TabsComponent } from '@components/tabs/tabs.component';
import { coordinatesStringValidator } from '@validators/array-length.validator';
import { TabButtonComponent } from '@components/tabs/components/tabs-nav/components/tab-button/tab-button.component';
import { TabsDirective } from '@components/tabs/directives/tabs/tabs.directive';
import { TabPanelComponent } from '@components/tabs/components/tab-panel/tab-panel.component';
import { TabsNavComponent } from '@components/tabs/components/tabs-nav/tabs-nav.component';
import { coordinatesValidator } from '@validators/coordinates.validator';
import {
    mapStringToCoordinatesArray,
    mapStringToCoordinates,
    mapCoordinatesToString,
    mapCoordinatesArrayToString,
} from './area-data-dialog.mapper';
import { AbstractDialog } from '@components/dialog-layout/classes/abstract-dialog.class';
import { PageHeaderComponent } from '@components/page-header/page-header.component';

const MISSION_NAME_MAX_LENGTH = 120;
const DOSE_PER_HQ_MIN = 1;
const MINIMUM_TARGET_AREA_COORDS = 3;
const TARGET_AREA_SIZE = 5;
const LAT_MULTIPLIER = 0.0005;
const LNG_MULTIPLIER = 0.001;
const LAT_DELTA = 0.01;
const LNG_DELTA = 0.02;

/**
 * AreaDataDialogComponent
 *
 * Type: Container (Dialog)
 *
 * Scope:
 * - Renders a dialog that is responsible for creating a new mission or edit an existing one.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic and fetching data or communicating with services.
 *
 * Purpose (optional):
 * - To serve as a smart container component that handles its business logic.
 */

@Component({
    selector: 'app-area-data-dialog',
    imports: [
        ReactiveFormsModule,
        TranslocoModule,
        DialogLayoutComponent,
        ButtonComponent,
        InputNumberComponent,
        InputTextComponent,
        InputTextareaComponent,
        MatIconModule,
        AdvancedMarkerFormControlComponent,
        PolygonFormControlComponent,
        GmpPolygonDrawingDirective,
        GmpMapComponent,
        GmpInfoWindowDirective,
        NgClass,
        GmpPlaceAutocompleteDirective,
        GmpAdvancedMarkerDirective,
        TabsComponent,
        TabButtonComponent,
        TabsDirective,
        TabPanelComponent,
        TabsNavComponent,
        PageHeaderComponent,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent extends AbstractDialog<AreaDataDialogVM> {
    private readonly fb = inject(FormBuilder);
    protected readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    protected readonly minimumTargetAreaCoords = MINIMUM_TARGET_AREA_COORDS;
    protected readonly missionNameMaxLength = MISSION_NAME_MAX_LENGTH;
    protected readonly dosePerHqMin = DOSE_PER_HQ_MIN;
    protected readonly latDelta = LAT_DELTA;
    protected readonly lngDelta = LNG_DELTA;
    protected readonly response = output<AreaDataDialogResponse>();
    protected readonly area = signal<Mission | undefined>(undefined);
    private readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    protected readonly formGroup = this.fb.group({
        name: this.fb.control('', [
            Validators.required,
            Validators.maxLength(this.missionNameMaxLength),
        ]),
        targetArea: this.fb.control<Coordinates[] | null>(null, [
            Validators.required,
            minArrayLengthValidator(this.minimumTargetAreaCoords),
        ]),
        entryPoint: this.fb.control<Coordinates | null>(null, [
            Validators.required,
        ]),
        dosePerHq: this.fb.control(0, [
            Validators.required,
            Validators.min(this.dosePerHqMin),
        ]),
        applicationDate: this.fb.control<Date | null>(
            null,
            Validators.required
        ),
        comment: this.fb.control<string | null>(null),
    });

    protected readonly textFormGroup = this.fb.group({
        targetArea: this.fb.control<string>('', {
            validators: coordinatesStringValidator(
                this.minimumTargetAreaCoords
            ),
        }),
        entryPoint: this.fb.control<string>('', {
            validators: coordinatesValidator(),
        }),
    });

    public override open(vm: AreaDataDialogVM, area?: Mission): void {
        this.vm.set(vm);
        this.area.set(area);
        this.dialog().nativeElement.showModal();
    }

    protected override cancel(): void {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }

    protected override submit(): void {
        if (this.formGroup.invalid) return;

        const {
            name,
            entryPoint,
            targetArea,
            dosePerHq,
            applicationDate,
            comment,
        } = this.formGroup.value;
        if (
            !entryPoint ||
            !targetArea ||
            !dosePerHq ||
            !applicationDate ||
            !name
        )
            return;

        this.response.emit({
            type: 'submit',
            areaData: {
                id: this.area()?.id ?? uuidv4(),
                name,
                entryPoint,
                targetArea,
                dosePerHq,
                applicationDate,
                comment: comment ?? undefined,
            },
        });
        this.dialog().nativeElement.close();
    }

    private readonly setValueEffect = effect(() => {
        const area = this.area();
        if (!area) return;
        this.formGroup.setValue({
            applicationDate: area.applicationDate,
            comment: area.comment ?? null,
            dosePerHq: area.dosePerHq,
            name: area.name,
            entryPoint: area.entryPoint,
            targetArea: area.targetArea,
        });
    });

    protected setMapTargetAreaFromText() {
        const value = this.textFormGroup.controls.targetArea.value;
        this.formGroup.controls.targetArea.setValue(
            this.textFormGroup.controls.targetArea.valid && value
                ? mapStringToCoordinatesArray(value)
                : null
        );
    }

    protected setMapEntryPointFromText() {
        const value = this.textFormGroup.controls.entryPoint.value;
        this.formGroup.controls.entryPoint.setValue(
            this.textFormGroup.controls.entryPoint.valid && value
                ? mapStringToCoordinates(value)
                : null
        );
    }

    protected setTextEntryPointFromValue(value: Coordinates | null) {
        this.textFormGroup.controls.entryPoint.setValue(
            value ? mapCoordinatesToString(value) : null
        );
    }

    protected setTextTargetAreaFromValue(value: Coordinates[] | null) {
        this.textFormGroup.controls.targetArea.setValue(
            value ? mapCoordinatesArrayToString(value) : null
        );
    }

    protected setTargetAreaFormControlFromCenter(center: Coordinates) {
        if (this.formGroup.controls.targetArea.disabled) return;
        this.formGroup.controls.targetArea.setValue([
            {
                lat: center.lat - LAT_MULTIPLIER * TARGET_AREA_SIZE,
                lng: center.lng - LNG_MULTIPLIER * TARGET_AREA_SIZE,
            },
            {
                lat: center.lat - LAT_MULTIPLIER * TARGET_AREA_SIZE,
                lng: center.lng + LNG_MULTIPLIER * TARGET_AREA_SIZE,
            },
            {
                lat: center.lat + LAT_MULTIPLIER * TARGET_AREA_SIZE,
                lng: center.lng + LNG_MULTIPLIER * TARGET_AREA_SIZE,
            },
            {
                lat: center.lat + LAT_MULTIPLIER * TARGET_AREA_SIZE,
                lng: center.lng - LNG_MULTIPLIER * TARGET_AREA_SIZE,
            },
        ]);
    }
}
