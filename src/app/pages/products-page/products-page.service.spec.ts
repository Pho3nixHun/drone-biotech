import { TestBed } from '@angular/core/testing';
import { ProductsPageService } from './products-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { isArray } from '@utils/is-array.typeguard';
import { selectID } from 'src/app/stores/router/router.selectors';

describe('ProductsPageService', () => {
    let service: ProductsPageService;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideMockStore()] });
        service = TestBed.inject(ProductsPageService);
        store = TestBed.inject(MockStore);
    });

    //Unit test
    it('should return the vm with 3 productItem when the getVM() function is called', () => {
        // Arrange
        const vm = service.getVM();

        // Act

        //Assert
        const product = vm().productListFrame.productItemVMs;
        if (isArray(product)) {
            expect(product.length).toBe(3);
        }
    });

    //Unit test
    it('should return the vm with 1 productItem when the route matches the id when the getVM() function is called', () => {
        // Arrange
        store.overrideSelector(selectID, '1');
        store.refreshState();
        const vm = service.getVM();

        // Act

        //Assert
        const product = vm().productListFrame.productItemVMs;
        expect(product?.length).toBe(1);
    });

    //Unit test
    it('should return the vm without productItem when the route do not matches with the id when the getVM() function is called', () => {
        // Arrange
        store.overrideSelector(selectID, 'wrongId');
        store.refreshState();
        const vm = service.getVM();

        // Act

        //Assert
        const product = vm().productListFrame.productItemVMs;
        expect(product).toBe(null);
    });
});
