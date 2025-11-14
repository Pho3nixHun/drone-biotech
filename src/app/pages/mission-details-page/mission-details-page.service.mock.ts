/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { MissionDetailsPageService } from './mission-details-page.service';
import { Message, MissionDetailsPageVM } from './mission-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class MissionDetailsPageServiceMock {
    public getVM() {
        return vm;
    }
    public sendMessage(_: Message) {
        // TODO
    }
}

export const updateVMSignal = (obj: MissionDetailsPageVM | undefined) =>
    vm.set(obj);

const vm = signal<MissionDetailsPageVM | undefined>(undefined);

export const provideMissionDetailsPageServiceMock = () => ({
    provide: MissionDetailsPageService,
    useClass: MissionDetailsPageServiceMock,
});
