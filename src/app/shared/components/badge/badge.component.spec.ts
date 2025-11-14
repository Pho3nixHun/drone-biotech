import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent, BadgeXVM } from './badge.component';
import { Component, input } from '@angular/core';

@Component({
    imports: [BadgeComponent],
    template: `@if (vm(); as vm) {
        <app-badge [vm]="vm">{{ vm.textKey }}</app-badge>
    }`,
})
class TestHostComponent {
    public vm = input.required<BadgeXVM>();
}

describe('BadgeComponent', () => {
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
    it('should render the default badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            textKey: 'badgeText',
        } as BadgeXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the rounded badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            textKey: 'badgeText',
            shape: 'rounded',
        } as BadgeXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the outline badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            textKey: 'badgeText',
            variant: 'outline',
        } as BadgeXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the soft badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', {
            textKey: 'badgeText',
            variant: 'soft',
        } as BadgeXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
