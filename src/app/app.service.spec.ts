import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { appVMDefault } from './app.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';

describe('AppService', () => {
    let service: AppService;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideMockStore()] });
        store = TestBed.inject(MockStore);
        service = TestBed.inject(AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the appVMDefault when the getVM() function is called', () => {
        // Arrange
        const vm = service.getVM();

        // Act

        //Assert
        expect(vm()).toEqual(appVMDefault);
    });

    it('should return the appVMDefault with the selectHeaderCanBeShown property with value of true when the getVM() function is called', () => {
        // Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);

        // Act
        store.refreshState();

        //Assert
        const vm = service.getVM();
        expect(vm()).toBeDefined();
        expect(vm().headerCanBeShown).toBe(true);
    });
});
