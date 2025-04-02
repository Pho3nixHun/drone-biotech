import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPageComponent } from './not-found-page.component';
import { getTranslocoModule } from 'transloco-testing.module';

describe('NotFoundPageComponent', () => {
    let fixture: ComponentFixture<NotFoundPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NotFoundPageComponent,
                getTranslocoModule({
                    langs: { en: {} },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [],
        }).compileComponents();

        fixture = TestBed.createComponent(NotFoundPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template', () => {
        //Arrange
        //No need to arrange
        //Act
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
