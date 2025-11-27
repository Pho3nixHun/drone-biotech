import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValueComponent, ValueVM } from './value.component';
import { getTranslocoModule } from 'transloco-testing.module';

describe('ValueComponent', () => {
    let fixture: ComponentFixture<ValueComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ValueComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ValueComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Unit testing
    it('should render the template correctly if the type is withoutKey', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            type: 'withoutKey',
            value: 1,
        } as ValueVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should render the template correctly if the type is withKey', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            type: 'withKey',
            key: '',
            params: { val: 21 },
        } as ValueVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
