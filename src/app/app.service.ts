import { computed, inject, Injectable, signal } from '@angular/core';
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
    private readonly store = inject(Store);

    private readonly vm = signal(appVMDefault);
    private readonly user = this.authStore.user;
    private readonly headerCanBeShown = toSignal(
        this.store.select(selectHeaderCanBeShown),
        { initialValue: false }
    );

    private readonly computedVM = computed<AppComponentVM>(() => {
        const vm = this.vm();
        const user = this.user();
        const headerCanBeShown = this.headerCanBeShown();
        const { signOutButtonXVM } = vm.headerXVM;

        const computedVM: AppComponentVM = {
            ...vm,
            headerXVM: {
                ...vm.headerXVM,
                hidden: !headerCanBeShown,
                signOutButtonXVM: { ...signOutButtonXVM, hidden: !user },
            },
        };
        return computedVM;
    });

    public getVM() {
        return this.computedVM;
    }
}
