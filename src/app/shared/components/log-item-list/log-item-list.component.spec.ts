import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LogItemComponent } from './components/log-item/log-item.component';
import { LogItemListComponent } from './log-item-list.component';
@Component({
    imports: [LogItemComponent, LogItemListComponent],
    template: `
        <app-log-item-list>
            <app-log-item></app-log-item>
            <div>Should not be projected</div>
        </app-log-item-list>
    `,
})
class TestHostComponent {}
describe('LogItemListComponent', () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<TestHostComponent>;

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
