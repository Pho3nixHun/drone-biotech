import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import {
    Component,
    effect,
    forwardRef,
    inject,
    input,
    signal,
    WritableSignal,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { noop } from 'rxjs';
import { TargetArea } from 'src/app/pages/order-details-page/order-details-page.model';
import { AreaFormControlService } from './area-form-control.service';

@Component({
    selector: 'app-area-form-control',
    imports: [TranslocoModule, ReactiveFormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AreaFormControlComponent),
            multi: true,
        },
    ],
    template: '',
})
export class AreaFormControlComponent implements ControlValueAccessor {
    private readonly areaFormControlService = inject(AreaFormControlService);
    public map = input.required<google.maps.Map>();

    private readonly targetAreas: WritableSignal<TargetArea[] | null> =
        signal(null);

    private readonly setMapEffect = effect(() =>
        this.areaFormControlService.setMap(this.map())
    );

    private readonly drawPolygonsEffect = effect(() => {
        const targetAreas = this.targetAreas();
        if (!targetAreas) return;
        this.areaFormControlService.drawPolygons(targetAreas);
    });

    public writeValue(value: TargetArea[] | null) {
        this.targetAreas.set(value);
    }

    private onChange: (value: TargetArea[] | null) => void = noop;

    private onTouched: () => void = noop;

    public registerOnChange(fn: (value: TargetArea[] | null) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
