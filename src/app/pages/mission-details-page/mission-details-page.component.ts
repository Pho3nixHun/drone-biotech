import {
    Component,
    effect,
    ElementRef,
    inject,
    viewChild,
} from '@angular/core';
import { formatDate, NgClass } from '@angular/common';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { MissionDetailsPageService } from './mission-details-page.service';
import { FrameComponent } from '@components/frame/frame.component';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import { GmpPolygonDrawingDirective } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.directive';
import { GmpAdvancedMarkerDirective } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TranslocoModule } from '@jsverse/transloco';
import { BadgeComponent } from '@components/badge/badge.component';
import {
    mapMissionStatusToStatusBadgeColors,
    mapMissionStatusToTranslocoTextKey,
} from './mission-details-page.mapper';
import { KeyValueComponent } from '../order-details-page/key-value/key-value.component';
import { KeyComponent } from '@components/key/key.component';
import { ValueComponent } from '@components/value/value.component';
import { StackComponent } from '@components/stack/stack.component';
import { ButtonComponent } from '@components/button/button.component';
import { DashboardPageRoutingModule } from '../dashboard-page/dashboard-page-routing.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import { MatIconModule } from '@angular/material/icon';
import { InputNumberComponent } from '@components/input-number/input-number.component';

const DATETIME_FORMAT = 'yyyy-MM-dd hh:mm';
const DATETIME_LOCALE = 'en';
const DOSE_PER_HA_MIN_VALUE = 1;

@Component({
    selector: 'app-mission-details-page',
    imports: [
        PageLayoutComponent,
        FrameComponent,
        GmpMapComponent,
        GmpPolygonDrawingDirective,
        GmpAdvancedMarkerDirective,
        PageHeaderComponent,
        TranslocoModule,
        BadgeComponent,
        NgClass,
        KeyValueComponent,
        KeyComponent,
        ValueComponent,
        StackComponent,
        ButtonComponent,
        DashboardPageRoutingModule,
        RouterModule,
        DialogLayoutComponent,
        ReactiveFormsModule,
        InputTextComponent,
        InputNumberComponent,
        MatIconModule,
    ],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    protected readonly dosePerHaMinValue = DOSE_PER_HA_MIN_VALUE;
    private readonly service = inject(MissionDetailsPageService);
    private readonly fb = inject(FormBuilder);
    protected readonly vm = this.service.getVM();
    private readonly updateMissionDialog = viewChild.required<
        ElementRef<HTMLDialogElement>
    >('updateMissionDialog');

    protected readonly missionDetailsGroup = this.fb.group({
        dosePerHa: this.fb.control(0, [
            Validators.required,
            Validators.nullValidator,
            Validators.min(this.dosePerHaMinValue),
        ]),
        scheduledDate: this.fb.control('', Validators.required),
    });

    private readonly setValueEffect = effect(() => {
        const vm = this.vm();
        if (!vm) return;
        const { dosePerHa, scheduledDate } = vm;
        this.missionDetailsGroup.setValue({
            dosePerHa,
            scheduledDate: formatDate(
                scheduledDate,
                DATETIME_FORMAT,
                DATETIME_LOCALE
            ),
        });
    });

    protected updateMission() {
        const { value } = this.missionDetailsGroup;
        if (this.missionDetailsGroup.invalid || !value) return;

        const { dosePerHa, scheduledDate } = value;
        if (!dosePerHa || !scheduledDate) return;

        this.service.updateMission({
            dosePerHa,
            scheduledDate: new Date(scheduledDate),
        });
        this.updateMissionDialog().nativeElement.close();
    }

    protected readonly mapMissionStatusToTranslocoTextKey =
        mapMissionStatusToTranslocoTextKey;
    protected readonly mapMissionStatusToStatusBadgeColors =
        mapMissionStatusToStatusBadgeColors;
}
