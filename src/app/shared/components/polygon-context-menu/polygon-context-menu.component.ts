import { Component, input, output } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';
import { ButtonComponent } from '@components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-polygon-context-menu',
    imports: [ButtonComponent, MatIconModule, TranslocoModule],
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
