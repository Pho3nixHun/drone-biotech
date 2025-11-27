import {
    ComponentFixture,
    DeferBlockBehavior,
    DeferBlockState,
    TestBed,
} from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import {
    provideLoginPageMockService,
    updateGetVMSignal,
} from './login-page.service.mock';
import {
    enMock,
    mockLoginPageVM,
    mockLoginPageVMWithButtonText,
    mockLoginPageVMWithErrorMessage,
    mockLoginPageVMWithoutButtonText,
    mockLoginPageVMWithoutErrorMessage,
} from './login-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';

describe('LoginPageComponent', () => {
    let fixture: ComponentFixture<LoginPageComponent>;
    let compiled: HTMLElement;
    let component: LoginPageComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                LoginPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideLoginPageMockService()],
            deferBlockBehavior: DeferBlockBehavior.Manual,
        }).compileComponents();

        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template when there is no VM provided', () => {
        // Arrange
        updateGetVMSignal(undefined);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template when there is a VM provided', () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render template correctly with the defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the form is invalid with the defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.reset();

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the form is valid with the defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.setValue({
            email: 'test@gmail.com',
            password: 'password',
        });

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the form is valid with the defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.setValue({
            email: 'test@gmail.com',
            password: 'password',
        });

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the form is valid with the defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.setValue({
            email: 'test@gmail.com',
            password: 'password',
        });

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the button has text in defer block on immediate', async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVMWithButtonText);

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it("should render the template correctly if the button doesn't have text in defer block on immediate", async () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVMWithoutButtonText);

        // Act
        fixture.detectChanges();
        await (
            await fixture.getDeferBlocks()
        )[0].render(DeferBlockState.Complete);

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the required assistive text inside the email input if it is dirty and has error', () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.controls.email.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the required assistive text inside the password input if it is dirty and has error', () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVM);
        component.formGroup.controls.password.markAsDirty();

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should not render the error message if there is no error provided', () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVMWithoutErrorMessage);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the error message if an error is provided', () => {
        // Arrange
        updateGetVMSignal(mockLoginPageVMWithErrorMessage);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should initialize the form with empty values', () => {
        // There is no need to arrange

        // There is no need to act

        // Assert
        expect(component.formGroup.controls.email.value).toBe('');
        expect(component.formGroup.controls.password.value).toBe('');
    });
});
