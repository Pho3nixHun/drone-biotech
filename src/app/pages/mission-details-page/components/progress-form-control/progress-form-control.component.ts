import {
    Component,
    computed,
    effect,
    forwardRef,
    input,
    signal,
} from '@angular/core';
import {
    LogItem,
    LogItemXVM,
    mapLogItemToLogItemXVM,
    ProgressFormControlVM,
} from './progress-form-control.model';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { ProgressItemComponent } from '@components/progress-group/components/progress-item-list/components/progress-item/progress-item.component';
import { ProgressItemListComponent } from '@components/progress-group/components/progress-item-list/progress-item-list.component';
import { ProgressGroupComponent } from '@components/progress-group/progress-group.component';
import { StepIndicatorComponent } from '@components/step-indicator/step-indicator.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { TranslocoModule } from '@jsverse/transloco';
import { LogItemComponent } from '@components/log-item-list/components/log-item/log-item.component';
import { LogItemListComponent } from '@components/log-item-list/log-item-list.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
    selector: 'app-progress-form-control',
    imports: [
        MatIcon,
        NgClass,
        ProgressItemComponent,
        ProgressItemListComponent,
        ProgressGroupComponent,
        StepIndicatorComponent,
        SectionCardComponent,
        TranslocoModule,
        LogItemComponent,
        LogItemListComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ProgressFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './progress-form-control.component.html',
})
export class ProgressFormControlComponent implements ControlValueAccessor {
    public vm = input.required<ProgressFormControlVM>();

    private readonly logItems = signal<LogItem[] | null>(null);

    protected readonly logItemXVMs = computed<LogItemXVM[] | null>(() => {
        const items = this.logItems();
        const vm = this.vm();
        return vm && items && items.length > 0
            ? items
                  .map((item) =>
                      mapLogItemToLogItemXVM(item, vm.creationDateValueKey)
                  )
                  .sort(
                      (a, b) =>
                          b.creationDate.getTime() - a.creationDate.getTime()
                  )
            : null;
    });

    private readonly logItemsEffect = effect(() =>
        this.onChange(this.logItems())
    );

    public writeValue(items: LogItem[]) {
        this.logItems.set(items);
    }

    private onChange: (value: LogItem[] | null) => void = () => noop;

    private onTouched: () => void = () => noop;

    public registerOnChange(fn: () => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
