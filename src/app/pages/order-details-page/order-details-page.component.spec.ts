import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsPageComponent } from './order-details-page.component';
import {
    enMock,
    mockVMDefault,
    mockVMWithDisabledCloseOrderButton,
    mockVMWithEnabledCloseOrderButton,
    mockVMWithFiveMessageItem,
    mockVMWithNotVisibleAddMissionButton,
    mockVMWithOneActionInCardItem,
    mockVMWithOneCardGroupHeader,
    mockVMWithOneCardItem,
    mockVMWithOneInfoItemInDetails,
    mockVMWithOneInfoItemInOverview,
    mockVMWithOneInfoPanelInDetails,
    mockVMWithOneKeyValueInCardItem,
    mockVMWithOneMessageItem,
    mockVMWithOneSummaryInHeader,
    mockVMWithoutActionInCardItem,
    mockVMWithoutCardGroupHeader,
    mockVMWithoutCardItem,
    mockVMWithoutInfoItemInDetails,
    mockVMWithoutInfoItemInOverview,
    mockVMWithoutInfoPanelInDetails,
    mockVMWithoutKeyValueInCardItem,
    mockVMWithoutMessageItem,
    mockVMWithoutSummaryInHeader,
    mockVMWithoutTargetAreas,
    mockVMWithTargetAreas,
    mockVMWithThreeActionInCardItem,
    mockVMWithThreeCardGroupHeader,
    mockVMWithThreeCardItem,
    mockVMWithThreeInfoItemInOverview,
    mockVMWithThreeInfoPanelInDetails,
    mockVMWithThreeKeyValueInCardItem,
    mockVMWithThreeSummaryInHeader,
    mockVMWithVisibleAddMissionButton,
} from './order-details-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockDialogService } from '@services/dialog/dialog.service.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
    OrderDetailsPageService,
    updateVMSubject,
} from './order-details-page.service';
import { selectUser } from '@stores/auth/auth.selector';
import { UserRole } from '@stores/auth/auth.model';
import { DialogService } from '@services/dialog/dialog.service';
import { ConfirmationDialogReason } from '@components/confirmation-dialog/confirmation-dialog.model';
import { of } from 'rxjs';

describe('OrderDetailsPageComponent', () => {
    let fixture: ComponentFixture<OrderDetailsPageComponent>;
    let compiled: HTMLElement;
    let component: OrderDetailsPageComponent;
    let orderDetailsPageService: OrderDetailsPageService;
    let dialogService: DialogService;
    let mockStore: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrderDetailsPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideMockDialogService(), provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(OrderDetailsPageComponent);
        mockStore = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
        dialogService = fixture.debugElement.injector.get(DialogService);
        orderDetailsPageService = fixture.debugElement.injector.get(
            OrderDetailsPageService
        );
    });

    // Unit testing
    it('should not send message with the service to the backend if the message form control is invalid', async () => {
        // Arrange
        component['messageFormControl'].setValue('');
        const spy = jest.spyOn(orderDetailsPageService, 'sendMessage');
        mockStore.overrideSelector(selectUser, {
            uid: 'uid',
            displayName: 'Sarah Johnson',
            email: 'sarah@gmail.com',
            photoURL: 'photo.jpg',
            role: UserRole.CUSTOMER,
        });

        // Act
        await component['onSendMessageClick']();

        // Assert
        expect(spy).toHaveBeenCalledTimes(0);
    });
    // Unit testing
    it('should not send message with the service to the backend if there is no user', async () => {
        // Arrange
        component['messageFormControl'].setValue('Valid message');
        const spy = jest.spyOn(orderDetailsPageService, 'sendMessage');
        mockStore.overrideSelector(selectUser, null);

        // Act
        await component['onSendMessageClick']();

        // Assert
        expect(spy).toHaveBeenCalledTimes(0);
    });
    // Unit testing
    it('should send message with the service to the backend if there is user and the message form control is valid', async () => {
        // Arrange
        component['messageFormControl'].setValue('Valid message');
        const spy = jest.spyOn(orderDetailsPageService, 'sendMessage');
        mockStore.overrideSelector(selectUser, {
            uid: 'uid',
            displayName: 'Sarah Johnson',
            email: 'sarah@gmail.com',
            photoURL: 'photo.jpg',
            role: UserRole.CUSTOMER,
        });

        // Act
        await component['onSendMessageClick']();

        // Assert
        expect(spy).toHaveBeenCalledTimes(1);
    });
    // Unit testing
    it('should not close the order if the response from the dialog is cancel', async () => {
        // Arrange
        const reason: ConfirmationDialogReason = { reasonType: 'cancel' };
        const spy = jest.spyOn(orderDetailsPageService, 'closeOrder');
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of(reason),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        // Act
        await component['openConfirmationDialog']({
            type: 'confirmationDialogVM',
            cancelButtonTextKey: '',
            confirmButtonTextKey: '',
            confirmTextKey: '',
            titleKey: '',
        });

        // Assert
        expect(spy).toHaveBeenCalledTimes(0);
    });
    // Unit testing
    it('should close the order if the response from the dialog is submit', async () => {
        // Arrange
        const reason: ConfirmationDialogReason = { reasonType: 'submit' };
        const spy = jest.spyOn(orderDetailsPageService, 'closeOrder');
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of(reason),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        // Act
        await component['openConfirmationDialog']({
            type: 'confirmationDialogVM',
            cancelButtonTextKey: '',
            confirmButtonTextKey: '',
            confirmTextKey: '',
            titleKey: '',
        });

        // Assert
        expect(spy).toHaveBeenCalled();
    });

    // Unit testing
    it('should not set the drawnPolygons if there are no target areas', () => {
        // Arrange
        updateVMSubject(mockVMWithoutTargetAreas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnPolygons']()).toBeFalsy();
    });
    // Unit testing
    it('should set the drawnPolygons if there are target areas', () => {
        // Arrange
        updateVMSubject(mockVMWithTargetAreas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnPolygons']()).toBeTruthy();
    });
    // Snapshot testing
    it('should render the template correctly if the messageFormControl is valid so the button will be enabled', () => {
        // Arrange
        updateVMSubject(mockVMDefault);
        component['messageFormControl'].setValue('valid');

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['messageFormControl'].valid).toBe(true);
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the messageFormControl is invalid so the button will be disabled', () => {
        // Arrange
        updateVMSubject(mockVMDefault);
        component['messageFormControl'].setValue('');

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['messageFormControl'].valid).toBe(false);
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the button is visible in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithVisibleAddMissionButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the button is not visible in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithNotVisibleAddMissionButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if the button is not visible in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithNotVisibleAddMissionButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if 0 summary is provided in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithoutSummaryInHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 summary is provided in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithOneSummaryInHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 summary is provided in the header', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeSummaryInHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 info item is provided in the overview', () => {
        // Arrange
        updateVMSubject(mockVMWithoutInfoItemInOverview);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 info item is provided in the overview', () => {
        // Arrange
        updateVMSubject(mockVMWithOneInfoItemInOverview);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 info item is provided in the overview', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeInfoItemInOverview);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 info panel is provided in the details section', () => {
        // Arrange
        updateVMSubject(mockVMWithoutInfoPanelInDetails);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 info panel is provided in the details section', () => {
        // Arrange
        updateVMSubject(mockVMWithOneInfoPanelInDetails);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 info panel is provided in the details section', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeInfoPanelInDetails);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 info item is provided in an info panel in the details section', () => {
        // Arrange
        updateVMSubject(mockVMWithoutInfoItemInDetails);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 info item is provided in an info panel in the details section', () => {
        // Arrange
        updateVMSubject(mockVMWithOneInfoItemInDetails);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 message item is provided', () => {
        // Arrange
        updateVMSubject(mockVMWithoutMessageItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 message item is provided', () => {
        // Arrange
        updateVMSubject(mockVMWithOneMessageItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 5 message item is provided', () => {
        // Arrange
        updateVMSubject(mockVMWithFiveMessageItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the close order button is disabled', () => {
        // Arrange
        updateVMSubject(mockVMWithDisabledCloseOrderButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the close order button is enabled', () => {
        // Arrange
        updateVMSubject(mockVMWithEnabledCloseOrderButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 card group header item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithoutCardGroupHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 card group header item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithOneCardGroupHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 card group header item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeCardGroupHeader);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 card item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithoutCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 card item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithOneCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 card item is provided in the missions', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 keyvalue is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithoutKeyValueInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 keyvalue is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithOneKeyValueInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 keyvalue is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeKeyValueInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 0 action is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithoutActionInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 1 action is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithOneActionInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if 3 action is provided in a card item', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeActionInCardItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
