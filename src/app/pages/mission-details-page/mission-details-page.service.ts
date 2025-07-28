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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public sendMessage = (message: unknown) => {};

    private readonly vm = of(missionDetailsPageDefaultVM);
}
