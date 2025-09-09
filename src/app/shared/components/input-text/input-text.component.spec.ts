import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextComponent, InputTextXVM } from './input-text.component';
import { Component, DebugElement, inject, input, signal } from '@angular/core';
import { InputIconComponent } from '@components/input-icon/input-icon.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getTranslocoModule } from 'transloco-testing.module';
import { ButtonComponent } from '@components/button/button.component';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { By } from '@angular/platform-browser';

@Component({
    imports: [
        InputIconComponent,
        InputTextComponent,
        ButtonComponent,
        ReactiveFormsModule,
    ],
    template: `
        @let vM = vm();
        <app-input-text [vm]="vM" [invalid]="!valid()" [formControl]="fc">
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
        </app-input-text>
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<InputTextXVM>();
    public readonly valid = signal<boolean>(true);
    public readonly fc = this.fb.control('');
}

describe('InputTextComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let debugEl: DebugElement;
    let component: InputTextComponent;

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
        debugEl = fixture.debugElement.query(By.css('app-input-text'));
        component = debugEl.componentInstance;
        fixture.componentInstance.valid.set(true);
    });

    // Unit testing
    it('should write value via writeValue', () => {
        // Arrange
        component.writeValue('Hello');

        // There is no need to act

        // Assert
        expect(component['value']()).toBe('Hello');
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

const mockVM: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    type: 'text',
};

const mockVMWithButton: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    type: 'text',
    buttonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};

const mockVMWithLeadingIcon: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    type: 'text',
    leadingIcon: MatIcon.ADD,
};

const mockVMWithTrailingIcon: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    type: 'text',
    trailingIcon: MatIcon.ADD,
};
const mockVMFull: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    type: 'text',
    trailingIcon: MatIcon.ADD,
    leadingIcon: MatIcon.CLOSE,
    buttonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};
const mockVMNotReadonly: InputTextXVM = {
    id: 'id',
    labelKey: enMock.label,
    autocomplete: 'tel',
    type: 'datetime-local',
    placeholderKey: enMock.placeholder,
    readonly: false,
};
const mockVMReadonly: InputTextXVM = {
    id: 'id',
    autocomplete: 'tel',
    type: 'datetime-local',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: true,
};
