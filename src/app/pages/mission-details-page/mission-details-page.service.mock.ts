import { Injectable, Signal, signal } from '@angular/core';
import { MissionDetailsPageService } from './mission-details-page.service';
import {
    MessageItemXVM,
    MissionDetailsPageVM,
} from './mission-details-page.model';
import { missionDetailsPageDefaultVM } from './mission-details-page.mock';
import { noop } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageServiceMock {
    public getVM(): Signal<MissionDetailsPageVM> {
        return vmSignal;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public sendMessage = (item: MessageItemXVM) => noop;
}

export const provideMockMissionDetailsPageService = () => ({
    provide: MissionDetailsPageService,
    useClass: MissionDetailsPageServiceMock,
});

const vmSignal = signal<MissionDetailsPageVM>(missionDetailsPageDefaultVM);

export const updateVMSignal = (vm: MissionDetailsPageVM) => vmSignal.set(vm);
