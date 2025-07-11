import { Component, input } from '@angular/core';
import { AvatarVM } from './avatar.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-avatar',
    imports: [NgClass],
    templateUrl: './avatar.component.html',
})
export class AvatarComponent {
    public vm = input.required<AvatarVM>();
}
