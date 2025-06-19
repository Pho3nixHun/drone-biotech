import { Component, input } from '@angular/core';
import { GridVM } from './grid.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-grid',
    imports: [NgClass],
    templateUrl: './grid.component.html',
})
export class GridComponent {
    public vm = input.required<GridVM>();
}
