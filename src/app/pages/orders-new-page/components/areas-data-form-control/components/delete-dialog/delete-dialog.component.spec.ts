import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';
import { DeleteDialogVM } from './delete-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { DIALOG_REF, DialogRef } from '@services/dialog/dialog.service';
import {
    provideMockDialogDataFactory,
    provideMockDialogRef,
    updateDialogDataSignal,
} from 'src/app/shared/providers/dialog-provider';
import { MatIcon } from '@interfaces/mat-icon.enum';

const enMock = {
    title: 'tit',
    warningText: 'warning',
};

describe('DeleteDialogComponent', () => {
    let fixture: ComponentFixture<DeleteDialogComponent>;
    let compiled: HTMLElement;
    let component: DeleteDialogComponent;
    const vm: DeleteDialogVM = {
        cancelButtonVM: {
            type: 'withIcon',
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        closeButtonVM: {
            type: 'withIcon',
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        deleteButtonVM: {
            type: 'withIcon',
            icon: MatIcon.ADD,
            variant: 'fill',
        },
        titleKey: enMock.title,
        type: 'deleteDialogVM',
        warningTextKey: enMock.warningText,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DeleteDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideMockDialogDataFactory(), provideMockDialogRef()],
        }).compileComponents();
    });

    describe('when the vm is not correct', () => {
        beforeEach(() => {
            updateDialogDataSignal({});
            fixture = TestBed.createComponent(DeleteDialogComponent);
            compiled = fixture.debugElement.nativeElement;
        });

        // Snapshot testing
        it('should not render the content if not DeleteDialogVM is provided', () => {
            // Arrange

            // Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });
    });
    describe('when the vm is correct', () => {
        let dialogRef: DialogRef<unknown>;
        beforeEach(() => {
            updateDialogDataSignal(vm);
            fixture = TestBed.createComponent(DeleteDialogComponent);
            dialogRef = TestBed.inject(DIALOG_REF);
            compiled = fixture.debugElement.nativeElement;
        });

        // Snapshot testing
        it('should render the content', () => {
            // Arrange

            // Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        // Unit testing
        it('should close the dialog when the deleteClick() method is called', () => {
            // Arrange
            const deleteSpy = jest.spyOn(dialogRef, 'close');
            component = fixture.componentInstance;

            // Act
            component['deleteClick']();

            //Assert
            expect(deleteSpy).toHaveBeenCalled();
        });

        // Unit testing
        it('should close the dialog when the cancelClick() method is called', () => {
            // Arrange
            const deleteSpy = jest.spyOn(dialogRef, 'close');
            component = fixture.componentInstance;

            // Act
            component['cancelClick']();

            //Assert
            expect(deleteSpy).toHaveBeenCalled();
        });
    });
});
