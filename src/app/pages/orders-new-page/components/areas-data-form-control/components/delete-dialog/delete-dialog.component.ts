import {
    Component,
    ElementRef,
    input,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { DeleteDialogResponse, DeleteDialogVM } from './delete-dialog.model';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { ButtonComponent } from '@components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-delete-dialog',
    imports: [
        DialogLayoutComponent,
        ButtonComponent,
        MatIconModule,
        TranslocoModule,
    ],
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
    public readonly vm = input.required<DeleteDialogVM>();
    public readonly response = output<DeleteDialogResponse>();
    private readonly areaDataId = signal<string | null>(null);
    public readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    protected cancelClick() {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }
    protected submitClick() {
        const id = this.areaDataId();
        if (!id) return;
        this.response.emit({ type: 'submit', id });
        this.dialog().nativeElement.close();
    }

    public openDialog(id: string) {
        this.areaDataId.set(id);
        this.dialog().nativeElement.showModal();
    }
}
