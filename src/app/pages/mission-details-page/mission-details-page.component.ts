import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { MissionDetailsPageService } from './mission-details-page.service';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { DrawEntryPointsDirective } from '@components/google-map/directives/draw-entry-points/draw-entry-points.directive';
import { DrawTargetAreasDirective } from '@components/google-map/directives/draw-target-areas/draw-target-areas.directive';

@Component({
    selector: 'app-mission-details-page',
    imports: [
        PageLayoutComponent,
        GoogleMapComponent,
        DrawTargetAreasDirective,
        DrawEntryPointsDirective,
    ],
    providers: [],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    private readonly missionDetailsPageService = inject(
        MissionDetailsPageService
    );

    protected readonly vm = toSignal(this.missionDetailsPageService.getVM());
}
