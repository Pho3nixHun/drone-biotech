import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageItemComponent } from './message-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [MessageItemComponent],
    template: `
        <app-message-item>
            <img src="" alt="Should be projected" />
            <div>Should not be projected</div>
            <h3>Should be projected</h3>
            <p>Should be projected</p>
            <time datetime="">Should be projected</time>
        </app-message-item>
    `,
})
class TestHostComponent {}

describe('MessageItemComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
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
