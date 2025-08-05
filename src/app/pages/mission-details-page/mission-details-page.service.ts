import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject(missionDetailsPageVM);

export const updateVMSubject = (vm: MissionDetailsPageVM) => vmSubject.next(vm);
