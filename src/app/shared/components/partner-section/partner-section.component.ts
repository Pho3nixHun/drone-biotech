import { Component, Input } from '@angular/core';
import { PartnerListComponent } from '../partner-list/partner-list.component';
import { Partners } from '@interfaces/partners';

@Component({
  selector: 'app-partner-section',
  standalone: true,
  imports: [PartnerListComponent],
  templateUrl: './partner-section.component.html',
})
export class PartnerSectionComponent {
  @Input()
  partners: Partners[] | undefined;
}
