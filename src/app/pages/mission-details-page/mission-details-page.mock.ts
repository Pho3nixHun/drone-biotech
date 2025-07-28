import { Rel } from '@interfaces/with-link.interface';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { CSSStyles } from '@components/avatar/avatar.model';

export const missionDetailsPageDefaultVM: MissionDetailsPageVM = {
    pageLayoutXVM: {
        titleKey: 'MissionDetailsPage.pageLayout.title',
        missionName: 'meglocsoljuk a kukoricát',
    },
    headerXVM: {
        creationDate: new Date(),
        creationDateLabelKey: 'MissionDetailsPage.header.creationDateLabel',
        creationDateValueKey: 'MissionDetailsPage.header.creationDateValue',
        openInMapsButtonXVM: {
            textKey: 'MissionDetailsPage.header.openInMapsButton.text',
            link: {
                href: 'https://www.google.com/maps?q=47.237,21.17827083349036',
                rel: [Rel.NoOpener, Rel.NoReferrer],
                target: '_blank',
            },
        },
        statusXVM: {
            textKey: 'MissionDetailsPage.header.status.text',
            style: '*:bg-green-500 *:text-white',
        },
    },
    mapFormControlXVM: {
        mapControl: {
            targetArea: [
                { lat: 47.23773203607438, lng: 21.17827083349036 },
                { lat: 47.23773203607438, lng: 21.188270833490357 },
                { lat: 47.24273203607437, lng: 21.188270833490357 },
                { lat: 47.24273203607437, lng: 21.17827083349036 },
            ],
            entryPoint: { lat: 47.237, lng: 21.17827083349036 },
        },
    },
    messagesSectionCardXVM: {
        titleKey: 'MissionDetailsPage.messages.title',
        sendMessageButtonTextKey:
            'MissionDetailsPage.messages.sendMessageButtonText',
        messageItemListXVM: {
            messageItemXVMs: [
                {
                    avatarXVM: {
                        type: 'withImage',
                        imageSrc: 'assets/farming.jpg',
                        altTextKey: 'SJ',
                    },
                    roleTextKey: 'MissionDetailsPage.messages.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'MissionDetailsPage.messages.senderValue',
                    sendingDateValueKey:
                        'MissionDetailsPage.messages.sendingDateValue',
                    sendingDate: new Date('2025-04-05T09:15:00'),
                    message:
                        'Please update me on the status of the East Meadow mission. Do we need to prepare access to any additional areas?',
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        initials: 'OM',
                        colors: CSSStyles.BLUE,
                    },
                    roleTextKey: 'MissionDetailsPage.messages.role.office',
                    senderName: 'Operations Manager',
                    senderValueKey: 'MissionDetailsPage.messages.senderValue',
                    sendingDateValueKey:
                        'MissionDetailsPage.messages.sendingDateValue',
                    sendingDate: new Date('2025-04-05T11:30:00'),
                    message:
                        "East Meadow mission is scheduled for April 10th. All preparations are on track. We'll need the eastern gate unlocked for equipment access. The West Orchard and Central Vineyard missions were completed successfully.",
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        imageSrc: 'assets/farming.jpg',
                        altTextKey: 'SJ',
                    },
                    roleTextKey: 'MissionDetailsPage.messages.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'MissionDetailsPage.messages.senderValue',
                    sendingDateValueKey:
                        'MissionDetailsPage.messages.sendingDateValue',
                    sendingDate: new Date('2025-04-05T13:45:00'),
                    message:
                        "Thank you for the update. I've arranged for the eastern gate to be unlocked on the 10th. Please share the completion reports for the West Orchard and Central Vineyard missions when available.",
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        initials: 'OM',
                        colors: CSSStyles.BLUE,
                    },
                    roleTextKey: 'MissionDetailsPage.messages.role.office',
                    senderName: 'Operations Manager',
                    senderValueKey: 'MissionDetailsPage.messages.senderValue',
                    sendingDateValueKey:
                        'MissionDetailsPage.messages.sendingDateValue',
                    sendingDate: new Date('2025-04-06T08:20:00'),
                    message:
                        'Noted. Reports are being finalized and will be shared by tomorrow. Also, confirming Upper Hill mission planned for April 12—please ensure road access is cleared.',
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        imageSrc: 'assets/farming.jpg',
                        altTextKey: 'SJ',
                    },
                    roleTextKey: 'MissionDetailsPage.messages.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'MissionDetailsPage.messages.senderValue',
                    sendingDateValueKey:
                        'MissionDetailsPage.messages.sendingDateValue',
                    sendingDate: new Date('2025-04-06T09:00:00'),
                    message:
                        'Understood. Road access to Upper Hill will be cleared by April 11th. Please notify if weather conditions affect scheduling.',
                },
            ],
        },
    },
};
