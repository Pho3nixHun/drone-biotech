import { PolygonColor } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { MatIcon } from '@interfaces/mat-icon.enum';

export const missionDetailsPageVM: MissionDetailsPageVM = {
    user: null,
    status: 'new',
    dosePerHa: 1,
    scheduledDate: new Date(),
    headerXVM: {
        titleKey: 'MissionDetailsPage.header.title',
        dialogActions: [
            {
                type: 'customerCancel',
                accessConditions: [{ role: 'customer', status: 'new' }],
                dialogLayoutXVM: {
                    confirmationTextKey:
                        'MissionDetailsPage.customerCancel.dialog.confirmationText',
                    optionalAssistiveTextKey:
                        'MissionDetailsPage.customerCancel.dialog.optionalText',
                    reasonInputTextareaXVM: {
                        id: 'reason',
                        labelKey:
                            'MissionDetailsPage.customerCancel.dialog.reason.label',
                        placeholderKey:
                            'MissionDetailsPage.customerCancel.dialog.reason.placeHolder',
                        readonly: false,
                    },
                    titleKey: 'MissionDetailsPage.customerCancel.dialog.title',
                    closeButtonXVM: {
                        variant: 'ghost',
                        secondary: true,
                        icon: MatIcon.CLOSE,
                    },
                    cancelButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'MissionDetailsPage.customerCancel.dialog.cancelButton.text',
                        secondary: true,
                    },
                    confirmButtonXVM: {
                        variant: 'fill',
                        textKey:
                            'MissionDetailsPage.customerCancel.dialog.submitButton.text',
                    },
                },
                buttonXVM: {
                    variant: 'fill',
                    textKey: 'MissionDetailsPage.customerCancel.button.text',
                },
            },
            {
                type: 'officeCancel',
                accessConditions: [
                    { role: 'office', status: 'new' },
                    { role: 'office', status: 'scheduled' },
                    { role: 'office', status: 'rejected' },
                    { role: 'office', status: 'accepted' },
                    { role: 'office', status: 'traveling' },
                    { role: 'office', status: 'arrived' },
                    { role: 'office', status: 'aborted' },
                    { role: 'office', status: 'in_progress' },
                ],
                dialogLayoutXVM: {
                    emptyStringAssistiveTextKey: 'Your message has no meaning.',
                    confirmationTextKey:
                        'MissionDetailsPage.officeCancel.dialog.confirmationText',
                    requiredAssistiveTextKey:
                        'MissionDetailsPage.officeCancel.dialog.requiredText',
                    reasonInputTextareaXVM: {
                        id: 'reason',
                        labelKey:
                            'MissionDetailsPage.officeCancel.dialog.reason.label',
                        placeholderKey:
                            'MissionDetailsPage.officeCancel.dialog.reason.placeHolder',
                        readonly: false,
                    },
                    titleKey: 'MissionDetailsPage.officeCancel.dialog.title',
                    closeButtonXVM: {
                        variant: 'ghost',
                        secondary: true,
                        icon: MatIcon.CLOSE,
                    },
                    cancelButtonXVM: {
                        variant: 'ghost',
                        textKey:
                            'MissionDetailsPage.officeCancel.dialog.cancelButton.text',
                        secondary: true,
                    },
                    confirmButtonXVM: {
                        variant: 'fill',
                        textKey:
                            'MissionDetailsPage.officeCancel.dialog.submitButton.text',
                    },
                },
                buttonXVM: {
                    variant: 'fill',
                    textKey: 'MissionDetailsPage.officeCancel.button.text',
                },
            },
        ],
        statusBadgeXVM: {
            status: 'new',
            shape: 'rounded',
        },
        creationDateKeyValueXVM: {
            keyXVM: {
                textKey: 'MissionDetailsPage.header.creationDate.keyText',
            },
            valueVM: {
                type: 'withKey',
                key: 'MissionDetailsPage.header.creationDate.value',
                params: { date: new Date() },
            },
        },
    },
    mapOverviewFrameXVM: {
        titleKey: 'MissionDetailsPage.overview.title',
        overviews: [
            {
                keyXVM: {
                    textKey: 'Scheduled date:',
                },
                valueVM: {
                    type: 'withKey',
                    key: 's',
                    params: { date: new Date() },
                },
            },
            {
                keyXVM: {
                    textKey: 'Total dose:',
                },
                valueVM: {
                    type: 'withKey',
                    key: '',
                    params: { dose: 14 },
                },
            },
            {
                keyXVM: {
                    textKey: 'Dose per ha',
                },
                valueVM: {
                    type: 'withKey',
                    key: 's',
                    params: { dose: 2.3 },
                },
            },
            {
                keyXVM: {
                    textKey: 'Status',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: 'Awaiting approval',
                },
            },
        ],
        openInGMButtonXVM: {
            secondary: true,
            variant: 'fill',
            textKey: 'MissionDetailsPage.overview.openInGMButton.text',
        },
        gmpMapXVM: {
            bounds: null,
            polygon: {
                colors: {
                    fillColor: PolygonColor.BLUE,
                    strokeColor: PolygonColor.BLUE,
                },
                coordinates: [
                    { lat: 47.2407, lng: 21.1866 },
                    { lat: 47.2397, lng: 21.1876 },
                    { lat: 47.2333, lng: 21.2 },
                    { lat: 47.2333, lng: 21.2 },
                ],
            },
            entryPoint: { coordinates: { lat: 47.2285, lng: 21.1952 } },
        },
    },
    logFrameXVM: {
        messageInputTextXVM: {
            id: 'message',
            autocomplete: 'off',
            placeholderKey: 'MissionDetailsPage.logs.messageInput.placeholder',
            readonly: false,
            type: 'text',
        },
        readonlyMessageControl: false,
        submitButtonXVM: {
            variant: 'ghost',
            icon: MatIcon.SEND,
        },
        titleKey: 'MissionDetailsPage.logs.title',

        messageXVMs: [
            {
                type: 'receiver',
                role: 'office',
                name: 'Operations Manager',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:30:00'),
                message:
                    'Good morning! I just received the latest shipment report. Everything looks on track.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'OM',
                },
            },
            {
                type: 'receiver',
                role: 'pilot',
                name: 'Ben Ford',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:35:00'),
                message:
                    'Thanks for the update. I’ll be heading out to the field in 10 minutes for the morning check.',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/farming.jpg',
                    altTextKey: 'Ben Ford',
                },
            },
            {
                type: 'receiver',
                role: 'office',
                name: 'Operations Manager',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:40:00'),
                message:
                    'Perfect. Please make sure to inspect the new irrigation system while you’re there.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'OM',
                },
            },
            {
                type: 'sender',
                role: 'customer',
                name: 'Calvin Jackson',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T10:00:00'),
                message:
                    'Hi team, I just wanted to check on the status of my last order. Any updates?',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'Calvin Jackson',
                },
            },
            {
                type: 'receiver',
                role: 'office',
                name: 'Field Manager',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T10:05:00'),
                message:
                    'Hello Calvin, your order is being processed and should be shipped by this afternoon.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'FM',
                },
            },
            {
                type: 'sender',
                role: 'customer',
                name: 'Calvin Jackson',
                dateTimeValueKey:
                    'MissionDetailsPage.logs.message.dateTimeValue',
                nameXRoleValueKey:
                    'MissionDetailsPage.logs.message.nameXRoleValue',
                dateTime: new Date('2025-10-06T11:00:00'),
                message:
                    'Great, thanks for the update! Looking forward to receiving it.',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'Calvin Jackson',
                },
            },
        ],
    },
};
