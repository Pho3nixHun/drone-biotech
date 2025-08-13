import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardComponent } from './section-card.component';
import { Component } from '@angular/core';
import { ProgressGroupComponent } from '@components/progress-group/progress-group.component';
import { LogItemListComponent } from '@components/log-item-list/log-item-list.component';
@Component({
    imports: [
        SectionCardComponent,
        ProgressGroupComponent,
        LogItemListComponent,
    ],
    template: `<app-section-card>
        <app-progress-group></app-progress-group>
        <app-log-item-list></app-log-item-list>
        <div>Should not be projected</div>
    </app-section-card>`,
})
class TestHostComponent {}
describe('SectionCardComponent', () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<SectionCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
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
