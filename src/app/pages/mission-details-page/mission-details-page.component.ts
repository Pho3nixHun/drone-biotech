import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MissionDetailsPageService } from './mission-details-page.service';
import { Component, effect, inject } from '@angular/core';
import { MapControl } from './mission-details-page.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { missionDetailsPageConfig } from './mission-details-page.config';
import { HeaderComponent } from './components/header/header.component';
import { StatusComponent } from '@components/status/status.component';
import { TranslocoModule } from '@jsverse/transloco';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { MessageItemListComponent } from '@components/message-item-list/message-item-list.component';
import { MessageItemComponent } from '@components/message-item/message-item.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { emptyStringValidator } from '@utils/empty-string.validator';
import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';
import { SectionCardComponent } from '@components/section-card/section-card.component';
import { DetailsItemListComponent } from '@components/details-item-list/details-item-list.component';
import { DetailsItemComponent } from '@components/details-item-list/components/details-item/details-item.component';
import { MatIconModule } from '@angular/material/icon';
import { InfoPanelComponent } from '@components/info-panel/info-panel.component';
import { InfoItemListComponent } from '@components/info-panel/components/info-item-list/info-item-list.component';
import { InfoItemComponent } from '@components/info-panel/components/info-item-list/components/info-item/info-item.component';

@Component({
    selector: 'app-mission-details-page',
    imports: [
        PageLayoutComponent,
        MapFormControlComponent,
        ReactiveFormsModule,
        HeaderComponent,
        StatusComponent,
        TranslocoModule,
        NgClass,
        MessageItemListComponent,
        MessageItemComponent,
        AvatarComponent,
        NgOptimizedImage,
        SectionCardComponent,
        DetailsItemListComponent,
        DetailsItemComponent,
        MatIconModule,
        InfoPanelComponent,
        InfoItemListComponent,
        InfoItemComponent,
    ],
    providers: [missionDetailsPageConfig],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    private readonly store = inject(Store);
    private readonly fb = inject(FormBuilder);
    private readonly missionDetailsPageService = inject(
        MissionDetailsPageService
    );
    private readonly currentUser = this.store.select(selectUser);

    protected readonly vm = toSignal(this.missionDetailsPageService.getVM());

    protected readonly mapControl = this.fb.control<MapControl>(
        {
            entryPoint: null,
            targetArea: null,
        },
        Validators.required
    );

    private readonly setMapControlEffect = effect(() => {
        const vm = this.vm();
        if (!vm) return;
        this.mapControl.setValue(vm.mapFormControlXVM.mapControl);
    });

    protected readonly messageControl = this.fb.control<string>('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    protected async sendMessage() {
        if (this.messageControl.invalid) return;

        const message = this.messageControl.value;
        if (!message) return;

        const user = await firstValueFrom(this.currentUser);
        if (!user) return;

        this.missionDetailsPageService.sendMessage({
            backgroundImageSrc: user.photoURL,
            altText: user.displayName,
            date: new Date(),
            name: user.displayName,
            message,
        });

        this.messageControl.reset();
    }
}
