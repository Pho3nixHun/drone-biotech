import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-message',
    imports: [NgClass],
    templateUrl: './message.component.html',
})
export class MessageComponent {
    public vm = input.required<MessageVM>();
}

export interface MessageVM {
    type: 'receiver' | 'sender';
    message: string;
}
