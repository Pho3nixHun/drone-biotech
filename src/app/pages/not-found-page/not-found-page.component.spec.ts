import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPageComponent } from './not-found-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    provideNotFoundPageMockService,
    updateGetVMSignal,
} from './not-found-page.service.mock';
import { enNotFoundPageMock, notFoundPageVMMock } from './not-found-page.mock';

describe('NotFoundPageComponent', () => {
    let fixture: ComponentFixture<NotFoundPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NotFoundPageComponent,
                getTranslocoModule({
                    langs: { en: enNotFoundPageMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideNotFoundPageMockService()],
        }).compileComponents();

        updateGetVMSignal(undefined);
        fixture = TestBed.createComponent(NotFoundPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should not render the template when there is not VM provided', () => {
        //Arrange
        //No need to arrange
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template when there is a VM provided', () => {
        //Arrange
        updateGetVMSignal(notFoundPageVMMock);
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
