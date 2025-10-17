import { Component, input } from '@angular/core';
import { AvatarVM, mapInitialsToRemainder } from './avatar.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-avatar',
    imports: [NgClass],
    templateUrl: './avatar.component.html',
})
export class AvatarComponent {
    public vm = input.required<AvatarVM>();
    protected mapInitialsToRemainder = mapInitialsToRemainder;
}
