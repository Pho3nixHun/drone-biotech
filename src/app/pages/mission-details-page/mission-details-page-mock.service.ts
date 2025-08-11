import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { MissionDetailsPageService } from './mission-details-page.service';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageMockService {
    public getVM(): Observable<MissionDetailsPageVM | null> {
        return this.vm$;
    }

    private readonly vm$: Observable<MissionDetailsPageVM | null> =
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject<MissionDetailsPageVM | null>(null);

export const updateVMSubject = (vm: MissionDetailsPageVM | null) =>
    vmSubject.next(vm);

export const provideMissionDetailsPageMockService = () => ({
    provide: MissionDetailsPageService,
    useClass: MissionDetailsPageMockService,
});
