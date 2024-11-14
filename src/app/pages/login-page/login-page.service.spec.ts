import { TestBed } from '@angular/core/testing';
import { LoginPageService } from './login-page.service';
import { loginPageVMDefault } from './login-page.mock';

describe('LoginPageService', () => {
    let service: LoginPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginPageService);
    });

    it('should not created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the loginPageVMDefault when the getVM() function is called', () => {
        // Arrange
        const vm = service.getVM();

        // Act
        // No need to act

        //Assert
        expect(loginPageVMDefault).toEqual(vm());
    });
});
