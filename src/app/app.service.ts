import { Injectable, signal, Signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { appVMDefault } from './app.mock';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    public getVM(): Signal<AppComponentVM> {
        return signal(appVMDefault);
    }
}
