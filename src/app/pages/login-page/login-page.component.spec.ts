import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
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
            providers: [provideLoginPageMockService()],
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
});
