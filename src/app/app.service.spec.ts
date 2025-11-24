import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockAuthStore } from '@stores/auth/auth.testing';

describe('AppService', () => {
    let service: AppService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore(), provideMockAuthStore()],
        });
        service = TestBed.inject(AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
