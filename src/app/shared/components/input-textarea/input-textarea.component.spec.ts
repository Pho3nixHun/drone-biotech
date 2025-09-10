import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    InputTextareaComponent,
    InputTextareaXVM,
} from './input-textarea.component';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { ButtonComponent } from '@components/button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, DebugElement, inject, input, signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { getTranslocoModule } from 'transloco-testing.module';

@Component({
    imports: [InputTextareaComponent, ButtonComponent, ReactiveFormsModule],
    template: `
        @let vM = vm();
        <app-input-textarea [vm]="vM" [invalid]="!valid()" [formControl]="fc">
            @if (vM.buttonXVM) {
                <app-button [vm]="vM.buttonXVM" />
            }
            <span leftAssistiveText>{{ vM.requiredAssistiveTextKey }}</span>
            <span rightAssistiveText>{{ vM.requiredAssistiveTextKey }}</span>
            <div>should not be displayed</div>
        </app-input-textarea>
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<InputTextareaXVM>();
    public readonly valid = signal<boolean>(true);
    public readonly fc = this.fb.control('');
}

describe('InputTextareaComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let debugEl: DebugElement;
    let component: InputTextareaComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                InputTextareaComponent,
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
        debugEl = fixture.debugElement.query(By.css('app-input-textarea'));
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

const mockVM: InputTextareaXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
};

const mockVMWithButton: InputTextareaXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
    buttonXVM: {
        icon: MatIcon.ADD,
        variant: 'fill',
    },
};

const mockVMNotReadonly: InputTextareaXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: false,
};
const mockVMReadonly: InputTextareaXVM = {
    id: 'id',
    labelKey: enMock.label,
    placeholderKey: enMock.placeholder,
    readonly: true,
};
