import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Partners } from '@interfaces/partners';
import { PartnerItemComponent } from '../partner-item/partner-item.component';

@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [CommonModule, PartnerItemComponent],
  templateUrl: './partner-list.component.html',
})
export class PartnerListComponent {
  @Input()
  partners: Partners[] | undefined;
}
