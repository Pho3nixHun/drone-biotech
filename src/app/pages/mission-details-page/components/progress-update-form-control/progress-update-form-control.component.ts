import {
    Component,
    effect,
    forwardRef,
    inject,
    Injector,
    input,
    signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProgressUpdateFormControlVM } from './progress-update-form-control.model';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
    DialogType,
    mapProgressItemTypeToCSSBorderStyle,
    mapProgressItemTypeToCSSStyle,
    mapProgressItemTypeToTranslocoKey,
    ProgressItemType,
} from '../../mission-details-page.model';
import { DialogService } from '@services/dialog/dialog.service';
import { lastValueFrom, map, noop } from 'rxjs';
import { TranslocoModule } from '@jsverse/transloco';
import { ProgressFrameComponent } from './components/progress-frame/progress-frame.component';
import { ProgressItemGroupComponent } from './components/progress-frame/components/progress-item-group/progress-item-group.component';
import { StepIndicatorComponent } from '@components/step-indicator/step-indicator.component';
import { mapStepIndicatorNumberToCSSStyle } from '@components/step-indicator/step-indicator.model';
import {
    isProgressLogItemVM,
    ProgressLogItemVM,
} from './components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.model';
import { ProgressLogItemComponent } from './components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.component';
import { ProgressLogItemListComponent } from './components/progress-frame/components/progress-log-item-list/progress-log-item-list.component';
import { isFormDialogResultWithData } from './components/form-dialog/form-dialog.model';

/**
 * ProgressUpdateFormControlComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a form control that handle the relevant information about ProgressItems.
 * - Passes relevant data, like config, texts.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including presentation, to create a cohesive user interface.
 */
@Component({
    selector: 'app-progress-update-form-control',
    imports: [
        NgClass,
        MatIconModule,
        TranslocoModule,
        StepIndicatorComponent,
        ProgressFrameComponent,
        ProgressItemGroupComponent,
        ProgressLogItemComponent,
        ProgressLogItemListComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ProgressUpdateFormControlComponent),
            multi: true,
        },
        {
            provide: DialogService,
            deps: [Injector],
        },
    ],
    templateUrl: './progress-update-form-control.component.html',
})
export class ProgressUpdateFormControlComponent
    implements ControlValueAccessor
{
    private readonly dialogService = inject(DialogService);
    public vm = input.required<ProgressUpdateFormControlVM>();

    protected readonly progressItem = signal<ProgressLogItemVM | null>(null);
    public progressItemsEffect = effect(() => {
        const item = this.progressItem();
        if (!item) return;
        this.onChange(item);
    });

    protected async openDialog(
        type: ProgressItemType,
        action: DialogType | ProgressLogItemVM
    ) {
        if (isProgressLogItemVM(action)) {
            this.progressItem.set(action);
            return;
        }
        const response: ProgressLogItemVM | null = await lastValueFrom(
            this.dialogService.create(action.vm, action.component).result$.pipe(
                map((data: unknown) =>
                    isFormDialogResultWithData(data)
                        ? {
                              date: new Date(),
                              description: data.reason,
                              statusType: type,
                          }
                        : null
                )
            )
        );

        if (!response) return;
        this.progressItem.set(response);
    }

    public writeValue: (item: ProgressLogItemVM) => void = () => noop;

    private onChange: (value: ProgressLogItemVM) => void = () => noop;
    private onTouched: () => void = () => noop;

    public registerOnChange(fn: (value: ProgressLogItemVM) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    protected mapProgressItemTypeToCSSStyle = mapProgressItemTypeToCSSStyle;
    protected mapProgressItemTypeToTranslocoKey =
        mapProgressItemTypeToTranslocoKey;
    protected mapProgressItemTypeToCSSBorderStyle =
        mapProgressItemTypeToCSSBorderStyle;
    protected mapStepIndicatorNumberToCSSStyle =
        mapStepIndicatorNumberToCSSStyle;
}
