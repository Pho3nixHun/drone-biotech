import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';
import { MessageComponent, MessageVM } from './message.component';
import { AvatarComponent } from '@components/avatar/avatar.component';

@Component({
    imports: [MessageComponent, AvatarComponent],
    template: `
        <app-message [vm]="vm()"
            ><app-avatar
                [vm]="{ type: 'withInitials', initials: 'JB' }"
            ></app-avatar>
            <time>Time</time>
        </app-message>
    `,
})
class TestHostComponent {
    vm = input.required<MessageVM>();
}

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
    it('should render the template correctly if the type is receiver', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockMessageReceiver);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should render the template correctly if the type is sender', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockMessageSender);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});

const mockMessageReceiver: MessageVM = {
    type: 'receiver',
    message: 'receiver_message',
};

const mockMessageSender: MessageVM = {
    type: 'sender',
    message: 'sender_message',
};
