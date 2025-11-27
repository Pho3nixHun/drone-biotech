import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { ChatBubbleComponent } from '@components/chat-bubble/chat-bubble.component';

@Component({
    imports: [MessageComponent, ChatBubbleComponent, AvatarComponent],
    template: `
        <app-message
            ><app-avatar
                [vm]="{ type: 'withInitials', initials: 'JB' }"
            ></app-avatar>
            <time>Time</time>
            <span name>Jack</span>
            <app-chat-bubble type="receiver"></app-chat-bubble>
            <div>Should not be rendered</div>
        </app-message>
    `,
})
class TestHostComponent {}

describe('MessageComponent', () => {
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
    it('should render the template and project the content correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
