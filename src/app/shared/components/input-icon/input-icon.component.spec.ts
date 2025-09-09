import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIconComponent } from './input-icon.component';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@interfaces/mat-icon.enum';

@Component({
    imports: [InputIconComponent],
    template: `<app-input-icon [icon]="leadingIcon()" />`,
})
class TestHostComponent {
    public leadingIcon = signal<MatIcon>(MatIcon.ADD);
}
describe('InputIconComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

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
