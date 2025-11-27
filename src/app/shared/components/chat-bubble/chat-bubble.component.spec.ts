import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatBubbleComponent, ChatBubbleType } from './chat-bubble.component';
import { Component, input } from '@angular/core';

@Component({
    imports: [ChatBubbleComponent],
    template: ` <app-chat-bubble [type]="type()"> Text </app-chat-bubble> `,
})
class TestHostComponent {
    type = input.required<ChatBubbleType>();
}
describe('ChatBubbleComponent', () => {
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
    it('should render the receiver type bubble', () => {
        // Arrange
        fixture.componentRef.setInput('type', 'receiver');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the sender type bubble', () => {
        // Arrange
        fixture.componentRef.setInput('type', 'sender');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
