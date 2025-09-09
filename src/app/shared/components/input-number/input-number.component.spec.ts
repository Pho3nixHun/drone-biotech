import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberComponent, InputNumberXVM } from './input-number.component';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { Component, DebugElement, inject, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { InputIconComponent } from '@components/input-icon/input-icon.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { By } from '@angular/platform-browser';

@Component({
    imports: [
        InputIconComponent,
        InputNumberComponent,
        ButtonComponent,
        ReactiveFormsModule,
    ],
    template: `
        @let vM = vm();
        <app-input-number [vm]="vM" [invalid]="!valid()" [formControl]="fc">
            @if (vM.buttonXVM) {
                <app-button [vm]="vM.buttonXVM" />
            }
            @if (vM.leadingIcon) {
                <app-input-icon leading [icon]="vM.leadingIcon" />
            }
            @if (vM.trailingIcon) {
                <app-input-icon trailing [icon]="vM.trailingIcon" />
            }
            <span leftAssistiveText>{{ vM.requiredAssistiveTextKey }}</span>
            <span rightAssistiveText>{{ vM.requiredAssistiveTextKey }}</span>
            <div>should not be displayed</div>
        </app-input-number>
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<InputTextXVM>();
    public readonly valid = signal<boolean>(true);
    public readonly fc = this.fb.control('');
}

describe('InputNumberComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let debugEl: DebugElement;
    let component: InputNumberComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
        debugEl = fixture.debugElement.query(By.css('app-input-number'));
        component = debugEl.componentInstance;
        fixture.componentInstance.valid.set(true);
    });

    // Unit testing
    it('should write value via writeValue', () => {
        // Arrange
        component.writeValue(7);

        // There is no need to act

        // Assert
        expect(component['value']()).toBe(7);
    });

    // Unit testing
    it('should call onTouched when markAsTouched is called', () => {
        // Arrange
        const spy = jest.fn();
        component.registerOnTouched(spy);

        // Act
        component['markAsTouched']();

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly when it has valid state', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        fixture.componentInstance.valid.set(true);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly when it has invalid state', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        fixture.componentInstance.valid.set(false);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the button is provided in the vm', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the leading icon is provided in the vm', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithLeadingIcon);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the trailing icon is provided in the vm', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithTrailingIcon);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if everything is provided in the vm', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMFull);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template if the control is enabled', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        fixture.componentInstance.fc.enable();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template if the control is disabled', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        fixture.componentInstance.fc.disable();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if it is not readonly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMNotReadonly);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if it is readonly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMReadonly);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    label: 'lab',
    placeholder: 'place',
};

const mockVM: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
};

const mockVMWithButton: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    buttonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};

const mockVMWithLeadingIcon: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    leadingIcon: MatIcon.ADD,
};

const mockVMWithTrailingIcon: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    trailingIcon: MatIcon.ADD,
};
const mockVMFull: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    trailingIcon: MatIcon.ADD,
    leadingIcon: MatIcon.CLOSE,
    buttonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};
const mockVMNotReadonly: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
};
const mockVMReadonly: InputNumberXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: true,
};
