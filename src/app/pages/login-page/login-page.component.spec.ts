import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
    provideLoginPageMockService,
    updateGetVMSignal,
} from './login-page.service.mock';
import { enLoginPageMock, loginPageVMMock } from './login-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';
import { selectAuthenticationError } from 'src/app/stores/auth/auth.selector';

describe('LoginPageComponent', () => {
    let fixture: ComponentFixture<LoginPageComponent>;
    let compiled: HTMLElement;
    let component: LoginPageComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                LoginPageComponent,
                getTranslocoModule({
                    langs: { en: enLoginPageMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideLoginPageMockService(),
                provideMockStore({
                    selectors: [
                        { selector: selectAuthenticationError, value: null },
                    ],
                }),
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should not render the template when there is no VM provided', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template when there is a VM provided', () => {
        //Arrange
        updateGetVMSignal(loginPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should initialize form controls with empty values', () => {
        //Arrange
        //There is no need to arrange

        //Act
        //There is no need to act

        //Assert
        expect(component.loginForm.controls.email.value).toBe('');
        expect(component.loginForm.controls.password.value).toBe('');
    });

    it('should disable the submit button if the loginForm is invalid', () => {
        //Arrange
        updateGetVMSignal(loginPageVMMock);

        //Act
        component.loginForm.setValue({ email: '', password: '' });
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(true);
    });

    it('should enable the submit button if the loginForm is valid', () => {
        //Arrange
        updateGetVMSignal(loginPageVMMock);

        //Act
        component.loginForm.setValue({
            email: 'test@freemail.hu',
            password: 'password',
        });
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector('button');

        //Assert
        expect(button.disabled).toBe(false);
    });
});
