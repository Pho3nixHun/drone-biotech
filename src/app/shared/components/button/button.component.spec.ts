import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { Component, input } from '@angular/core';
import { ButtonVM, State } from './button.model';
import {
    enMock,
    mockGhostButton,
    mockIconButton,
    mockOutlineButton,
    mockPrimaryButton,
    mockSecondaryButton,
    mockTextButton,
} from './button.mock';
import { getTranslocoModule } from 'transloco-testing.module';

@Component({
    imports: [ButtonComponent],
    template: ` <app-button [vm]="vm()" [state]="state()" /> `,
})
class TestHostComponent {
    public vm = input.required<ButtonVM>();
    public state = input<State>('default');
}
describe('ButtonComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

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
    });

    // Snapshot testing
    it('should render a primary button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render a secondary button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockSecondaryButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render a ghost button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockGhostButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render an outline button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockOutlineButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a button with text', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockTextButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a button with icon', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockIconButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a default button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);
        fixture.componentRef.setInput('state', 'default');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a active button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);
        fixture.componentRef.setInput('state', 'active');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a disabled button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);
        fixture.componentRef.setInput('state', 'disabled');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
