import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',

})
export class HeroComponent {

}
