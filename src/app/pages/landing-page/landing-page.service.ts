import { Injectable, Signal, signal } from '@angular/core';
import { LandingPageVM } from './landing-page-vm.model';
import { landingPageVMDefault } from './landing-page.mock';

@Injectable({
    providedIn: 'root',
})
export class LandingPageService {
    public getVM(): Signal<LandingPageVM> {
        return signal(landingPageVMDefault);
    }
}

