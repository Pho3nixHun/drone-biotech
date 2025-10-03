import {
    AreaData,
    AreaDataDialogResponse,
    AreaDataDialogVM,
} from './area-data-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import {
    Component,
    effect,
    ElementRef,
    inject,
    input,
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

const MISSION_NAME_MAX_LENGTH = 120;
const DOSE_PER_HQ_MIN = 1;
const MINIMUM_TARGET_AREA_COORDS = 3;

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
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    protected readonly dosePerHqMin = DOSE_PER_HQ_MIN;
    protected readonly missionNameMaxLength = MISSION_NAME_MAX_LENGTH;
    protected readonly minimumTargetAreaCoords = MINIMUM_TARGET_AREA_COORDS;
    protected readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    private readonly fb = inject(FormBuilder);
    public readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
    public readonly vm = input.required<AreaDataDialogVM>();
    public readonly area = signal<AreaData | undefined>(undefined);
    protected readonly response = output<AreaDataDialogResponse>();
    protected readonly mapCoordinatesArrayToString =
        mapCoordinatesArrayToString;
    protected readonly mapStringToCoordinatesArray =
        mapStringToCoordinatesArray;
    protected readonly stringToCoordinate = stringToCoordinate;

    protected readonly formGroup = this.fb.group({
        missionName: this.fb.control('', [
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

    private readonly setValueEffect = effect(() => {
        const area = this.area();
        if (!area) return;
        this.formGroup.setValue({
            applicationDate: area.applicationDate,
            comment: area.comment ?? null,
            dosePerHq: area.dosePerHq,
            missionName: area.missionName,
            entryPoint: area.entryPoint,
            targetArea: area.targetArea,
        });
    });

    protected submitForm() {
        if (this.formGroup.invalid) return;

        const {
            missionName,
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
            !missionName
        )
            return;

        this.response.emit({
            type: 'submit',
            areaData: {
                id: this.area()?.id ?? uuidv4(),
                missionName,
                entryPoint,
                targetArea,
                dosePerHq,
                applicationDate,
                comment: comment ?? undefined,
            },
        });
        this.dialog().nativeElement.close();
    }
}

const mapCoordinatesArrayToString = (coords: Coordinates[]): string =>
    coords.map((coord) => `${coord.lat} ${coord.lng}`).join('\n');
const mapStringToCoordinatesArray = (str: string): Coordinates[] =>
    str
        .split('\n')
        .filter((line) => line.trim().length > 0) // skip empty lines
        .map((line) => {
            const [lat, lng] = line.trim().split(/\s+/).map(Number);
            return { lat, lng };
        });

const stringToCoordinate = (str: string): Coordinates => {
    const [lat, lng] = str.trim().split(/\s+/).map(Number);
    return { lat, lng };
};
