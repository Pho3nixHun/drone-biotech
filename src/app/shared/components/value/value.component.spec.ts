import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueComponent } from './value.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { ValueVM } from './value.model';

describe('ValueComponent', () => {
    let fixture: ComponentFixture<ValueComponent>;
    let compiled: HTMLElement;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ValueComponent,
                getTranslocoModule({
                    langs: { en: {} },
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

    // Snapshot testing
    it('should render the template correctly if the vm does not contain valueKey', () => {
        // Arrange
        const valueVM: ValueVM = { type: 'withoutValueKey', value: 12 };
        fixture.componentRef.setInput('vm', valueVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the vm contains valueKey', () => {
        // Arrange
        const valueVM: ValueVM = {
            type: 'withValueKey',
            key: '',
            params: { count: 12 },
        };
        fixture.componentRef.setInput('vm', valueVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
