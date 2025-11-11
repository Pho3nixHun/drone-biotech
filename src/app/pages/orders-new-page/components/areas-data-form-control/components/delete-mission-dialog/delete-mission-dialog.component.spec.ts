import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteMissionDialogComponent } from './delete-mission-dialog.component';
import { DeleteMissionDialogVM } from './delete-mission-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { MatIcon } from '@interfaces/mat-icon.enum';

describe('DeleteMissionDialogComponent', () => {
    let component: DeleteMissionDialogComponent;
    let fixture: ComponentFixture<DeleteMissionDialogComponent>;
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
                DeleteMissionDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(DeleteMissionDialogComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Unit testing
    it('should not open the dialog if id is not provided', () => {
        // Arrange
        const dialogSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'showModal'
        );

        // Act
        component.open(vm);

        // Assert
        expect(dialogSpy).not.toHaveBeenCalled();
    });

    // Unit testing
    it('should open the dialog and set the vm and the id if id is provided', () => {
        // Arrange
        const id = 'id';
        const dialogSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'showModal'
        );

        // Act
        component.open(vm, id);

        // Assert
        expect(dialogSpy).toHaveBeenCalled();
        expect(component['areaDataId']()).toBe(id);
        expect(component['vm']()).toStrictEqual(vm);
    });

    // Unit testing
    it('should emit submit and close dialog', () => {
        // Arrange
        const id = '123';
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );
        component['areaDataId'].set(id);

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({ type: 'submit', id });
        expect(closeSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should emit cancel and close dialog', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        component['cancel']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({ type: 'cancel' });
        expect(closeSpy).toHaveBeenCalled();
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange
        component['open'](vm, '123');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    title: 'tit',
    cancelText: 'cancel',
    confirmText: 'confirm',
    confirm: 'conf',
};

const vm: DeleteMissionDialogVM = {
    titleKey: enMock.title,
    cancelButtonXVM: { variant: 'fill', textKey: enMock.cancelText },
    closeButtonXVM: { variant: 'ghost', icon: MatIcon.CLOSE },
    confirmButtonXVM: { variant: 'fill', textKey: enMock.confirmText },
    confirmTextKey: enMock.confirm,
};
