import {
    Component,
    ElementRef,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { AbstractDialog } from '@components/dialog-layout/classes/abstract-dialog.class';
import {
    DeleteMissionDialogResponse,
    DeleteMissionDialogVM,
} from './delete-mission-dialog.model';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '@components/button/button.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * DeleteMissionDialogComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a dialog that offers an option to delete a mission.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic and fetching data or communicating with services.
 *
 * Purpose (optional):
 * - To serve as a smart container component that handles its business logic like delete a mission or not.
 */

@Component({
    selector: 'app-delete-mission-dialog',
    imports: [
        MatIconModule,
        ButtonComponent,
        PageHeaderComponent,
        DialogLayoutComponent,
        TranslocoModule,
    ],
    templateUrl: './delete-mission-dialog.component.html',
})
export class DeleteMissionDialogComponent extends AbstractDialog<DeleteMissionDialogVM> {
    private readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
    private readonly areaDataId = signal<string | null>(null);

    public readonly response = output<DeleteMissionDialogResponse>();

    public override open(vm: DeleteMissionDialogVM, id?: string) {
        if (!id) return;
        this.vm.set(vm);
        this.areaDataId.set(id);
        this.dialog().nativeElement.showModal();
    }

    protected override submit() {
        const id = this.areaDataId();
        if (!id) return;
        this.response.emit({ type: 'submit', id });
        this.dialog().nativeElement.close();
    }

    protected override cancel() {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }
}
