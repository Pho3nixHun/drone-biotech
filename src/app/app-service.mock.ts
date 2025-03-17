import { Injectable, signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { AppService } from './app.service';

const getVMSignal = signal<AppComponentVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class AppComponentMockService {
    public getVM = () => getVMSignal;
}

export const provideAppComponentMockService = () => ({
    provide: AppService,
    useClass: AppComponentMockService,
});

export const updateGetVMSignal = getVMSignal.set.bind(getVMSignal);
