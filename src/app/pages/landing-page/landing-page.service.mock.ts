import { Injectable, signal } from '@angular/core';
import { LandingPageVM } from './landing-page-vm.model';
import { LandingPageService } from './landing-page.service';

const getVMSignal = signal<LandingPageVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class LandingPageMockService {
    public getVM = () => getVMSignal;
}

export const provideLandingPageMockService = () => ({
    provide: LandingPageService,
    useClass: LandingPageMockService,
});

export const updateGetVMSignal = (val: LandingPageVM | undefined) =>
    getVMSignal.set(val);
