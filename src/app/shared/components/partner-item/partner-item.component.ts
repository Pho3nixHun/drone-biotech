import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-item',
  standalone: true,
  imports: [],
  templateUrl: './partner-item.component.html',
})
export class PartnerItemComponent {
  @Input()
  imageSrc: string | undefined;
  @Input()
  altText: string | undefined;
}
