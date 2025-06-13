import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';

describe('DashboardPageComponent', () => {
    let fixture: ComponentFixture<DashboardPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DashboardPageComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
