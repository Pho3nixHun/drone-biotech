import { computed, inject, Injectable, Signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { appVMDefault } from './app.mock';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { AuthStore } from '@stores/auth/auth.store';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private readonly authStore = inject(AuthStore);
    private readonly user = this.authStore.user;

    private readonly headerCanBeShown = toSignal(
        inject(Store).select(selectHeaderCanBeShown),
        { initialValue: false }
    );

    private readonly vm = computed<AppComponentVM>(() => {
        const headerCanBeShown = this.headerCanBeShown();
        const user = this.user();
        return headerCanBeShown
            ? {
                  ...appVMDefault,
                  signOutButtonVM: user
                      ? appVMDefault.signOutButtonVM
                      : undefined,
                  headerCanBeShown,
              }
            : appVMDefault;
    });

    public getVM(): Signal<AppComponentVM> {
        return this.vm;
    }
}
