import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@interfaces/mat-icon.enum';

@Component({
    selector: 'app-input-icon',
    imports: [MatIconModule],
    templateUrl: './input-icon.component.html',
})
export class InputIconComponent {
    public icon = input.required<MatIcon>();
}
