import { Injectable, Signal, signal } from '@angular/core';
import { NotFoundPageServiceModel } from './not-found-page.service.model';
import { NotFoundPageService } from './not-found-page.service';
import { NotFoundPageVM } from './not-found-page-vm.model';

@Injectable({
    providedIn: 'root',
})
class NotFoundPageMockService extends NotFoundPageServiceModel {
    public getVM = (): Signal<NotFoundPageVM | undefined> => getVMSignal;
}

const getVMSignal = signal<NotFoundPageVM | undefined>(undefined);

export const updateGetVMSignal = getVMSignal.set.bind(getVMSignal);

export const provideNotFoundPageMockService = () => ({
    provide: NotFoundPageService,
    useClass: NotFoundPageMockService,
});
