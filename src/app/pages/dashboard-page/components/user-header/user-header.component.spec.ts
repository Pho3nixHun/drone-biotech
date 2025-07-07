import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { UserHeaderComponent } from './user-header.component';

@Component({
    imports: [UserHeaderComponent],
    template: `
        <app-user-header>
            <h2>Should be projected</h2>
            <p>Should be projected</p>
            <small>Should be projected</small>
            <time>Should be projected</time>
            <div>Should not be projected</div>
        </app-user-header>
    `,
})
class TestHostComponent {}

describe('UserHeaderComponent', () => {
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
