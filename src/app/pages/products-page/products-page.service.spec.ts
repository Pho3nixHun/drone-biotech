import { TestBed } from '@angular/core/testing';

import { ProductsPageService } from './products-page.service';

describe('ProductsPageService', () => {
  let service: ProductsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
