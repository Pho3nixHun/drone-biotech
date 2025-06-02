import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionGridItemComponent } from './mission-grid-item.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, input } from '@angular/core';
import { MissionGridItemVM } from './mission-grid-item.model';

const en = { title: 'val' };
const mockVm = { titleKey: en.title };

@Component({
    imports: [MissionGridItemComponent],
    template: `
        <app-mission-grid-item [vm]="vm()">
            <div>Should be projected</div>
        </app-mission-grid-item>
    `,
})
class TestHostComponent {
    public vm = input.required<MissionGridItemVM>();
}
describe('MissionGridItemComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template if the input is provided and project the content', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVm);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
