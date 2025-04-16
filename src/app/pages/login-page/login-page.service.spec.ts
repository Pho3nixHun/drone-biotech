import { TestBed } from '@angular/core/testing';
import { LoginPageService } from './login-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
    selectAuthenticationError,
    selectAuthState,
} from 'src/app/stores/auth/auth.selector';
import { loginPageVMDefault } from './login-page.mock';

describe('LoginPageService', () => {
    let service: LoginPageService;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectAuthState,
                            value: { user: null, loading: null, error: null },
                        },
                    ],
                }),
            ],
        });
        store = TestBed.inject(MockStore);
        service = TestBed.inject(LoginPageService);
    });

    //Unit test
    it('should return the loginPageVMDefault when the getVM() function is called', () => {
        // Arrange
        store.overrideSelector(selectAuthenticationError, null);

        // Act
        store.refreshState();

        //Assert
        expect(service.getVM()()).toEqual(loginPageVMDefault);
    });
    it('should return the loginPageVMDefault with an errorMessage if there is an authError when the getVM() function is called', () => {
        // Arrange
        store.overrideSelector(selectAuthenticationError, {
            code: '',
            message: '',
            name: '',
        });

        // Act
        store.refreshState();
        const vm = service.getVM();

        //Assert
        expect(vm()).toBeDefined();
        expect(vm().loginFormXVM.errorMessageKey).toBeTruthy();
    });
});
