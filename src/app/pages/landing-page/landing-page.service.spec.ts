import { TestBed } from '@angular/core/testing';
import { LandingPageService } from './landing-page.service';
import { landingPageVMDefault } from './landing-page.mock';

describe('LandingPageService', () => {
    let service: LandingPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LandingPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the landingPageVMDefault when the getVM() function is called', () => {
        // Arrange
        const vm = service.getVM();

        // Act
        // No need to act

        //Assert
        expect(landingPageVMDefault).toEqual(vm());
    });
});
