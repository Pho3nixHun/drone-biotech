import { TestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';
import { landingPageVMMock } from './landing-page.mock';

describe('LandingPageService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the landingPageVMMock when the getVM() function is called', () => {
    // Arrange
    const vm = service.getVM();

    // Act

    //Assert
    expect(landingPageVMMock).toEqual(vm());
  });
});
