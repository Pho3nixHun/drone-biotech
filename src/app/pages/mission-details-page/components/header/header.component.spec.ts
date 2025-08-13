import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { StatusComponent } from '@components/status/status.component';

@Component({
    imports: [HeaderComponent, StatusComponent],
    template: `
        <app-header>
            <app-status></app-status>
            <p>Should be projected</p>
            <a href="">Should be projected</a>
            <div href="">Should not be projected</div>
        </app-header>
    `,
})
class TestHostComponent {}

describe('HeaderComponent', () => {
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
    it('should project the content and render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
