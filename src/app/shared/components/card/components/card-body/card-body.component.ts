import { Component } from '@angular/core';
import { WithTitle } from '@interfaces/with-title.interface';

@Component({
    selector: 'app-card-body',
    imports: [],
    templateUrl: './card-body.component.html',
})
export class CardBodyComponent {}

export interface CardBodyXVM extends Partial<WithTitle> {
    descriptionKey?: string;
}
