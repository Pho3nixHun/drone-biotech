import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { appMockVM } from './app.mock';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the appMockVM when the getVM() function is called', () => {
    // Arrange
    const vm = service.getVM();

    // Act

    //Assert
    expect(appMockVM).toEqual(vm());
  });
});
