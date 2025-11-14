import { Component } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';

@Component({
    selector: 'app-card-footer',
    imports: [],
    templateUrl: './card-footer.component.html',
})
export class CardFooterComponent {}

export interface CardFooterXVM {
    buttonXVM: ButtonXVM;
}
