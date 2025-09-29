import { Component, input, output } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';
import { ButtonComponent } from '@components/button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-polygon-context-menu',
    imports: [ButtonComponent, MatIconModule],
    templateUrl: './polygon-context-menu.component.html',
})
export class PolygonContextMenuComponent {
    public readonly vm = input.required<PolygonContextMenuVM>();
    public readonly showRemoveVertexButton = input.required<boolean>();
    public readonly polygonContextMenuEvent = output<PolygonContextMenuEvent>();
}

export interface PolygonContextMenuEvent {
    type: 'remove' | 'clear' | 'close';
}

export interface PolygonContextMenuVM {
    removePolygonButtonXVM: ButtonXVM;
    removeVertexButtonXVM: ButtonXVM;
    closeButtonXVM: ButtonXVM;
}
