import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { missionDetailsPageVM } from './mission-details-page.mock';
import { MissionDetailsPageVM } from './mission-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageService {
    public getVM(): Observable<MissionDetailsPageVM> {
        return this.vm$;
    }

    private readonly vm$: Observable<MissionDetailsPageVM> =
        of(missionDetailsPageVM);
}
