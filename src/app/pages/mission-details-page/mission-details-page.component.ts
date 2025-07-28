import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MissionDetailsPageService } from './mission-details-page.service';
import { Component, effect, inject } from '@angular/core';
import { MapControl } from './mission-details-page.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { missionDetailsPageConfig } from './mission-details-page.config';

@Component({
    selector: 'app-mission-details-page',
    imports: [
        PageLayoutComponent,
        MapFormControlComponent,
        ReactiveFormsModule,
    ],
    providers: [missionDetailsPageConfig],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    private readonly fb = inject(FormBuilder);
    private readonly missionDetailsPageService = inject(
        MissionDetailsPageService
    );

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
}
