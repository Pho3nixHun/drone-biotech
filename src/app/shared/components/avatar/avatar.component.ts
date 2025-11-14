import { Component, input } from '@angular/core';
import { AvatarVM, mapInitialsToRemainder } from './avatar.model';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-avatar',
    imports: [NgClass, TranslocoModule],
    templateUrl: './avatar.component.html',
})
export class AvatarComponent {
    public vm = input.required<AvatarVM>();
    protected mapInitialsToRemainder = mapInitialsToRemainder;
}
