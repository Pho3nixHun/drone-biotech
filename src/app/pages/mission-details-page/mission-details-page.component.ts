import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { filter, firstValueFrom, tap } from 'rxjs';
import { PageSectionComponent } from '@components/page-section/page-section.component';
import { FrameComponent } from '@components/frame/frame.component';
import { MissionDetailsPageService } from './mission-details-page.service';
import { MissionGridItemComponent } from './components/mission-grid-item/mission-grid-item.component';
import { ProgressUpdateFormControlComponent } from './components/progress-update-form-control/progress-update-form-control.component';
import { MessageItemListComponent } from '../../shared/components/message-item-list/message-item-list.component';
import { MessageItemComponent } from '../../shared/components/message-item/message-item.component';
import { RouterModule } from '@angular/router';
import {
    MapControl,
    mapDetailsItemTypeToCSSStyle,
} from './mission-details-page.model';
import { MISSION_DETAILS_PAGE_PROVIDERS } from './mission-details-page.config';
import { emptyStringValidator } from '@utils/empty-string.validator';
import { MissionHeaderComponent } from './components/mission-header/mission-header.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailsItemListComponent } from '../../shared/components/details-item-list/details-item-list.component';
import { isString } from '@utils/is-string.typeguard';
import { MissionStatusComponent } from './components/mission-header/components/mission-status/mission-status.component';
import {
    mapMissionStatusTypeToCSSStyle,
    mapMissionStatusTypeToTranslocoKey,
} from './components/mission-header/components/mission-status/mission-status.model';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { DetailsItemComponent } from '../../shared/components/details-item/details-item.component';
import {
    isProgressLogItemVM,
    ProgressLogItemVM,
} from './components/progress-update-form-control/components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.model';
import { SupplyItemListComponent } from '../../shared/components/supply-item-list/supply-item-list.component';
import { SupplyItemComponent } from '../../shared/components/supply-item/supply-item.component';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';

/**
 * MissionDetailsPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a page that contains the relevant information about a mission. Visualize a Google Map, a form control for updating the mission and other components.
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
    selector: 'app-mission-details-page',
    imports: [
        PageSectionComponent,
        FrameComponent,
        MissionStatusComponent,
        TranslocoModule,
        ReactiveFormsModule,
        MissionGridItemComponent,
        NgClass,
        ProgressUpdateFormControlComponent,
        MessageItemListComponent,
        MessageItemComponent,
        RouterModule,
        MissionHeaderComponent,
        MatIconModule,
        DetailsItemListComponent,
        MapFormControlComponent,
        DetailsItemComponent,
        SupplyItemListComponent,
        SupplyItemComponent,
    ],
    providers: [MISSION_DETAILS_PAGE_PROVIDERS],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    private readonly store = inject(Store);
    private readonly fb = inject(FormBuilder);
    private readonly pageService = inject(MissionDetailsPageService);
    private readonly currentUser = this.store.select(selectUser);

    protected readonly vm = this.pageService.getVM();

    protected readonly mapControl = this.fb.control<MapControl>(
        {
            entryPoint: this.vm().missionDataXVM.entryPoint,
            targetArea: this.vm().missionDataXVM.targetArea,
        },
        Validators.required
    );

    protected readonly messageControl = this.fb.control<string>('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    public async sendMessage() {
        if (this.messageControl.invalid) return;

        const value = this.messageControl.value;
        if (!value) return;

        const user = await firstValueFrom(this.currentUser);
        if (!user) return;

        this.pageService.sendMessage({
            altText: `${user.displayName} photo`,
            backgroundImageSrc: user.photoURL ?? 'assets/lepke.jpg',
            date: new Date(),
            message: value,
            name: user.displayName ?? 'Barna Maci',
        });
        this.messageControl.reset();
    }

    protected readonly progressLogItemControl =
        this.fb.control<ProgressLogItemVM | null>(null);

    private readonly sendLogItemSignal = toSignal(
        this.progressLogItemControl.valueChanges.pipe(
            filter(isProgressLogItemVM),
            tap((item) => this.pageService.addLogItem(item))
        )
    );

    protected readonly mapMissionStatusTypeToCSSStyle =
        mapMissionStatusTypeToCSSStyle;
    protected readonly mapMissionStatusTypeToTranslocoKey =
        mapMissionStatusTypeToTranslocoKey;
    protected readonly mapDetailsItemTypeToCSSStyle =
        mapDetailsItemTypeToCSSStyle;
    protected readonly isString = isString;
}
