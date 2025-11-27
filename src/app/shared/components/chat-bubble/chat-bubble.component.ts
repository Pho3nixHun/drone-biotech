import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-chat-bubble',
    templateUrl: './chat-bubble.component.html',
    imports: [NgClass],
})
export class ChatBubbleComponent {
    public readonly type = input.required<ChatBubbleType>();
}

export type ChatBubbleType = 'receiver' | 'sender';
