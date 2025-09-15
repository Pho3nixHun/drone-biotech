import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { DeleteDialogVM } from './delete-dialog.model';
import { MatIcon } from '@interfaces/mat-icon.enum';

describe('DeleteDialogComponent', () => {
    let component: DeleteDialogComponent;
    let fixture: ComponentFixture<DeleteDialogComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        HTMLDialogElement.prototype.showModal = jest.fn(function () {
            this.setAttribute('open', '');
        });
        HTMLDialogElement.prototype.close = jest.fn(function () {
            this.removeAttribute('open');
        });
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
        }).compileComponents();

        fixture = TestBed.createComponent(DeleteDialogComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the dialog is opened', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        fixture.detectChanges();
        component['openDialog']('id12');

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should close the dialog and send cancel response', () => {
        // Arrange
        const responseSpy = jest.spyOn(component['response'], 'emit');
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        fixture.detectChanges();
        component['cancelClick']();

        // Assert
        expect(responseSpy).toHaveBeenCalledWith({ type: 'cancel' });
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should close the dialog and send submit response', () => {
        // Arrange
        const responseSpy = jest.spyOn(component['response'], 'emit');
        fixture.componentRef.setInput('vm', mockVM);
        component['areaDataId'].set('id12');

        // Act
        fixture.detectChanges();
        component['submitClick']();

        // Assert
        expect(responseSpy).toHaveBeenCalledWith({
            type: 'submit',
            id: 'id12',
        });
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    title: 'tit',
    confirmText: 'confirm',
};

const mockVM: DeleteDialogVM = {
    titleKey: enMock.title,
    confirmTextKey: enMock.confirmText,
    closeButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    confirmButtonXVM: { icon: MatIcon.ADD, variant: 'fill' },
    cancelButtonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};
