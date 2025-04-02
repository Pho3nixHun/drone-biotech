import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { AppService } from './app.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { Store } from '@ngrx/store';

const getVMSignal = signal<AppComponentVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class AppComponentMockService {
    private readonly headerCanBeShown = toSignal(
        inject(Store).select(selectHeaderCanBeShown),
        { initialValue: false }
    );

    private readonly vm = computed<AppComponentVM | undefined>(() => {
        const vmSignal = getVMSignal();
        if (!vmSignal) {
            return vmSignal;
        }

        const headerCanBeShown = this.headerCanBeShown();
        return headerCanBeShown
            ? {
                  ...vmSignal,
                  headerCanBeShown: headerCanBeShown,
              }
            : vmSignal;
    });

    public getVM(): Signal<AppComponentVM | undefined> {
        return this.vm;
    }
}

export const provideAppComponentMockService = () => ({
    provide: AppService,
    useClass: AppComponentMockService,
});

export const updateGetVMSignal = getVMSignal.set.bind(getVMSignal);
