import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloseOrderDialogComponent } from './close-order-dialog.component';
import { CloseOrderDialogVM } from './close-order-dialog.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { getTranslocoModule } from 'transloco-testing.module';

describe('CloseOrderDialogComponent', () => {
    let component: CloseOrderDialogComponent;
    let fixture: ComponentFixture<CloseOrderDialogComponent>;
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
                CloseOrderDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CloseOrderDialogComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Unit testing
    it('should open the dialog and set vm', () => {
        // Arrange
        const dialogSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'showModal'
        );

        // Act
        component.open(vm);

        // Assert
        expect(dialogSpy).toHaveBeenCalled();
        expect(component['vm']()).toStrictEqual(vm);
    });

    // Unit testing
    it('should emit submit and close dialog', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({ type: 'submit' });
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
        component.open(vm);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    title: 'tit',
    confirmText: 'confirm',
    confirmButtonText: 'conf',
    closeButtonText: 'close',
};

const vm: CloseOrderDialogVM = {
    titleKey: enMock.title,
    confirmTextKey: enMock.title,
    cancelButtonXVM: { variant: 'fill', textKey: enMock.closeButtonText },
    closeButtonXVM: { variant: 'fill', icon: MatIcon.CLOSE },
    confirmButtonXVM: { variant: 'fill', textKey: enMock.confirmButtonText },
};
