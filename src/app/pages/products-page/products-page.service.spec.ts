import { TestBed } from '@angular/core/testing';
import { ProductsPageService } from './products-page.service';
import { productsPageVM } from './products-page.mock';

describe('ProductsPageService', () => {
  let service: ProductsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Snapshot test
  it('should return the productsPageVM when the getVM() function is called', () => {
    // Arrange
    const vm = service.getVM();

    // Act
    // No need to act

    //Assert
    expect(productsPageVM).toEqual(vm());
  });
});
