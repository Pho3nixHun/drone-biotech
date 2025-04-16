import { computed, inject, Injectable, Signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { appVMDefault } from './app.mock';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private readonly headerCanBeShown = toSignal(
        inject(Store).select(selectHeaderCanBeShown),
        { initialValue: false }
    );

    private readonly vm = computed<AppComponentVM>(() => {
        const headerCanBeShown = this.headerCanBeShown();
        return headerCanBeShown
            ? {
                  ...appVMDefault,
                  headerCanBeShown: headerCanBeShown,
              }
            : appVMDefault;
    });

    public getVM(): Signal<AppComponentVM> {
        return this.vm;
    }
}
