import { TestBed } from '@angular/core/testing';
import { LandingPageService } from './landing-page.service';

describe('LandingPageService', () => {
    let service: LandingPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LandingPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return a LandingPageVM when the getVM() function is called', () => {
        // Arrange
        const vm = service.getVM();

        // Act

        //Assert
        expect(vm).toBeDefined();
        expect(vm()).toHaveProperty('frameXVMs');
    });
});
