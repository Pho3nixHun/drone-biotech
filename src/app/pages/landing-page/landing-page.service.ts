import { Injectable, signal } from '@angular/core';
import { landingPageVMDefault } from './landing-page.mock';

@Injectable({
    providedIn: 'root',
})
export class LandingPageService {
    public getVM() {
        return signal(landingPageVMDefault);
    }
}
