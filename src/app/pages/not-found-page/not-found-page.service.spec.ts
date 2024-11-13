import { TestBed } from '@angular/core/testing';

import { NotFoundPageService } from './not-found-page.service';
import { notFoundPageVMDefault } from './not-found-page.mock';

describe('NotFoundPageService', () => {
  let service: NotFoundPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFoundPageService);
  });

  it('should return the notFoundPageVM when the getVM() function is called', () => {
    // Arrange
    const vm = service.getVM();

    // Act
    // No need to act

    //Assert
    expect(notFoundPageVMDefault).toEqual(vm());
  });
});
