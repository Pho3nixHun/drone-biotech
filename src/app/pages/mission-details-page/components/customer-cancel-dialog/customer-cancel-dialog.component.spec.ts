import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCancelDialogComponent } from './customer-cancel-dialog.component';
import { CustomerCancelDialogVM } from './customer-cancel-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';

describe('CustomerCancelDialogComponent', () => {
    let component: CustomerCancelDialogComponent;
    let fixture: ComponentFixture<CustomerCancelDialogComponent>;
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
                CustomerCancelDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CustomerCancelDialogComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

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

    it('should emit confirm with trimmed reason and close dialog', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );
        component['reasonControl'].setValue('   valid reason   ');

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({
            type: 'confirm',
            reason: 'valid reason',
        });
        expect(closeSpy).toHaveBeenCalled();
    });

    it('should emit confirm with null reason if empty', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );
        component['reasonControl'].setValue('    ');

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({
            type: 'confirm',
            reason: null,
        });
        expect(closeSpy).toHaveBeenCalled();
    });

    it('should close dialog on cancel', () => {
        // Arrange
        const closeSpy = jest.spyOn(
            component['dialog']().nativeElement,
            'close'
        );

        // Act
        component['cancel']();

        // Assert
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
    reasonLabel: 'reason',
    placeHolder: 'place',
    optionalAssistiveText: 'optional',
};

const vm: CustomerCancelDialogVM = {
    optionalAssistiveTextKey: enMock.optionalAssistiveText,
    titleKey: enMock.title,
    cancelButtonXVM: {
        variant: 'fill',
    },
    closeButtonXVM: {
        variant: 'fill',
    },
    confirmationTextKey: enMock.confirmText,
    confirmButtonXVM: { variant: 'fill' },
    reasonInputTextareaXVM: {
        id: 'id',
        labelKey: enMock.reasonLabel,
        placeholderKey: enMock.placeHolder,
        readonly: false,
    },
};
