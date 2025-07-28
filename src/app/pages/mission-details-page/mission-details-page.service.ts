import { missionDetailsPageDefaultVM } from './mission-details-page.mock';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageService {
    public getVM(): Observable<MissionDetailsPageVM> {
        return this.vm;
    }

    private readonly vm = of(missionDetailsPageDefaultVM);
}
