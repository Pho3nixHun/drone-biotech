import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Auth } from '@angular/fire/auth';
import {
    provideLoginPageMockService,
    updateGetVMSignal,
} from './login-page.service.mock';
import { enLoginPageMock, loginPageVMMock } from './login-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';

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
                provideMockStore(),
                provideLoginPageMockService(),
                { provide: Auth, useValue: null },
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);
        fixture = TestBed.createComponent(LoginPageComponent);
        fixture.detectChanges();
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
        expect(component.loginForm.get('email')?.value).toBe('');
        expect(component.loginForm.get('password')?.value).toBe('');
    });

    it('should validate the email format', () => {
        //Arrange
        const emailControl = component.loginForm.get('email');

        //Act
        emailControl?.setValue('invalidEmail');

        //Assert
        expect(emailControl?.hasError('email')).toBe(true);
    });

    it('should validate the password format', () => {
        //Arrange
        const passwordControl = component.loginForm.get('password');

        //Act
        passwordControl?.setValue('');

        //Assert
        expect(passwordControl?.hasError('required')).toBe(true);
    });

    it('should disable the submit button if the loginForm is invalid', () => {
        //Arrange
        updateGetVMSignal(loginPageVMMock);

        //Act
        component.loginForm.get('email')?.setValue('');
        component.loginForm.get('password')?.setValue('');
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'form button[type="submit"]'
        );
        expect(button.disabled).toBe(true);
    });

    it('should enable the submit button if the loginForm is valid', () => {
        //Arrange
        updateGetVMSignal(loginPageVMMock);

        //Act
        component.loginForm.get('email')?.setValue('test@example.com');
        component.loginForm.get('password')?.setValue('password');
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'button[type="submit"]'
        );
        expect(button.disabled).toBe(false);
    });
});
