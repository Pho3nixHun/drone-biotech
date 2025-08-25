import { TestBed } from '@angular/core/testing';
import { LoginPageService } from './login-page.service';

describe('LoginPageService', () => {
    let service: LoginPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: LoginPageService, useValue: {} }],
        });
        service = TestBed.inject(LoginPageService);
    });

    it('should not created', () => {
        expect(service).toBeTruthy();
    });
});
