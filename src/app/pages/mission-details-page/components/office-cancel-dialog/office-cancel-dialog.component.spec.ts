import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeCancelDialogComponent } from './office-cancel-dialog.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { OfficeCancelDialogVM } from './office-cancel-dialog.model';

describe('OfficeCancelDialogComponent', () => {
    let component: OfficeCancelDialogComponent;
    let fixture: ComponentFixture<OfficeCancelDialogComponent>;
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
                OfficeCancelDialogComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OfficeCancelDialogComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Unit testing
    it('should open the dialog and set the vm', () => {
        // Arrange
        const dialogSpy = jest.spyOn(
            component['myDialog']().nativeElement,
            'showModal'
        );

        // Act
        component.open(vm);

        // Assert
        expect(dialogSpy).toHaveBeenCalled();
        expect(component['vm']()).toStrictEqual(vm);
    });

    // Unit testing
    it('should emit confirm with trimmed reason and close dialog', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['myDialog']().nativeElement,
            'close'
        );
        component['reasonControl'].setValue('  Reason text  ');

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({
            type: 'confirm',
            reason: 'Reason text',
        });
        expect(closeSpy).toHaveBeenCalled();
    });

    // Unit testing
    it('should emit confirm with null reason if control is empty', () => {
        // Arrange
        const emitSpy = jest.spyOn(component.response, 'emit');
        const closeSpy = jest.spyOn(
            component['myDialog']().nativeElement,
            'close'
        );
        component['reasonControl'].setValue('   ');

        // Act
        component['submit']();

        // Assert
        expect(emitSpy).toHaveBeenCalledWith({
            type: 'confirm',
            reason: null,
        });
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
    emptyStringAssistiveText: 'empty',
    reasonLabel: 'reason',
    placeHolder: 'place',
    requiredAssistiveText: 'required',
};

const vm: OfficeCancelDialogVM = {
    titleKey: enMock.title,
    cancelButtonXVM: {
        variant: 'fill',
    },
    closeButtonXVM: {
        variant: 'fill',
    },
    confirmationTextKey: enMock.confirmText,
    confirmButtonXVM: { variant: 'fill' },
    emptyStringAssistiveTextKey: enMock.emptyStringAssistiveText,
    reasonInputTextareaXVM: {
        id: 'id',
        labelKey: enMock.reasonLabel,
        placeholderKey: enMock.placeHolder,
        readonly: false,
    },
    requiredAssistiveTextKey: enMock.requiredAssistiveText,
};
