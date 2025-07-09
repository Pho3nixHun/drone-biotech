import { Component, input } from '@angular/core';
import { SectionCardVM } from './section-card.model';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-section-card',
    imports: [TranslocoModule],
    templateUrl: './section-card.component.html',
})
export class SectionCardComponent {
    public vm = input.required<SectionCardVM>();
}
