import { Rel } from '@interfaces/with-link.interface';
import { MissionDetailsPageVM } from './mission-details-page.model';

export const missionDetailsPageDefaultVM: MissionDetailsPageVM = {
    role: 'office',
    titleKey: 'MissionDetailsPage.title',
    createdDateValueKey: 'MissionDetailsPage.createdDateValue',

    missionDataXVM: {
        missionName: 'meglocsoljuk a kukoricát',
        missionStatusType: 'pending',
        createdDate: new Date(),
        dosePerHa: 10,
        targetArea: [
            { lat: 47.23773203607438, lng: 21.17827083349036 },
            { lat: 47.23773203607438, lng: 21.188270833490357 },
            { lat: 47.24273203607437, lng: 21.188270833490357 },
            { lat: 47.24273203607437, lng: 21.17827083349036 },
        ],
        entryPoint: { lat: 47.237, lng: 21.17827083349036 },
        applicationDate: new Date(),
        comment:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, porro. Possimus, cumque, voluptas laborum cupiditate alias atque quasi tenetur odit beatae iste sint aspernatur ea reiciendis quibusdam earum repellendus. Nam.',
    },
    navigateButtonVM: {
        textKey: 'MissionDetailsPage.navigateButton.title',
        link: {
            href: 'https://www.google.com/maps?q=',
            rel: [Rel.NoOpener, Rel.NoReferrer],
            target: '_blank',
        },
    },

    detailsGridItemVM: {
        titleKey: 'MissionDetailsPage.detailsGridItem.title',
        detailsItemXVMs: [
            {
                type: 'date',
                matIconName: 'calendar_month',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.dateLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.dateValue',
                    params: { date: new Date() },
                },
            },
            {
                type: 'area',
                matIconName: 'crop_free',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.targetAreaSizeInHaLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.targetAreaSizeInHaValue',
                    params: {
                        count: 0,
                    },
                },
            },
            {
                type: 'dose',
                matIconName: 'water_drop',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.totalDoseLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.totalDoseValue',
                    params: { count: 0 },
                },
            },
            {
                type: 'distance',
                matIconName: 'location_on',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.distanceInKmLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.distanceInKmValue',
                    params: { count: 0 },
                },
            },
            {
                type: 'comment',
                matIconName: 'chat',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.commentLabel',
                value: '',
            },
        ],
    },

    suppliesGridItemVM: {
        titleKey: 'MissionDetailsPage.suppliesMissionGridItem.title',
        supplyItemXVMs: [
            {
                name: 'Herbicide Solution A',
                quantity: 114.5,
                unit: 'litre',
            },
            { name: 'Battery Packs', quantity: 4, unit: 'unit' },
            { name: 'Spray Nozzles', quantity: 8, unit: 'unit' },
            { name: 'Calibration Kit', quantity: 1, unit: 'unit' },
        ],
    },

    messagesGridItemVM: {
        submitButtonTextKey:
            'MissionDetailsPage.messagesGridItem.submitButtonText',
        titleKey: 'MissionDetailsPage.messagesGridItem.title',
        dateValueKey: 'MissionDetailsPage.messagesGridItem.dateValue',
        messageItemXVMs: [
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'System Admin',
                message:
                    'Order created and awaiting approval. Please review mission details and supplies list.',
                date: new Date('2025-04-01T09:15:00'),
            },
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'Operations Manager',
                message:
                    'Supplies have been allocated. Entry point coordinates have been updated. Please confirm if date works for your team.',
                date: new Date('2025-04-01T11:30:00'),
            },
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'Field Team',
                message:
                    "Date confirmed. We'll need an additional calibration kit for this mission. Can you update the supplies list?",
                date: new Date('2025-04-02T08:45:00'),
            },
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'System Admin',
                message:
                    'Order created and awaiting approval. Please review mission details and supplies list.',
                date: new Date('2025-04-01T09:15:00'),
            },
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'Operations Manager',
                message:
                    'Supplies have been allocated. Entry point coordinates have been updated. Please confirm if date works for your team.',
                date: new Date('2025-04-01T11:30:00'),
            },
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'Field Team',
                message:
                    "Date confirmed. We'll need an additional calibration kit for this mission. Can you update the supplies list?",
                date: new Date('2025-04-02T08:45:00'),
            },
        ],
    },
};

export const missionDetailsPageVMMock: MissionDetailsPageVM = {
    role: 'office',
    titleKey: 'MissionDetailsPage.title',
    createdDateValueKey: 'MissionDetailsPage.createdDateValue',

    missionDataXVM: {
        missionName: 'meglocsoljuk a kukoricát',
        missionStatusType: 'pending',
        createdDate: new Date(),
        dosePerHa: 10,
        targetArea: [
            { lat: 47.23773203607438, lng: 21.17827083349036 },
            { lat: 47.23773203607438, lng: 21.188270833490357 },
            { lat: 47.24273203607437, lng: 21.188270833490357 },
            { lat: 47.24273203607437, lng: 21.17827083349036 },
        ],
        entryPoint: { lat: 47.237, lng: 21.17827083349036 },
        applicationDate: new Date(),
        comment:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, porro. Possimus, cumque, voluptas laborum cupiditate alias atque quasi tenetur odit beatae iste sint aspernatur ea reiciendis quibusdam earum repellendus. Nam.',
    },
    navigateButtonVM: {
        textKey: 'MissionDetailsPage.navigateButton.title',
        link: {
            href: 'https://www.google.com/maps?q=',
            rel: [Rel.NoOpener, Rel.NoReferrer],
            target: '_blank',
        },
    },

    detailsGridItemVM: {
        titleKey: 'MissionDetailsPage.detailsGridItem.title',
        detailsItemXVMs: [
            {
                type: 'date',
                matIconName: 'calendar_month',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.dateLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.dateValue',
                    params: { date: new Date() },
                },
            },
            {
                type: 'area',
                matIconName: 'crop_free',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.targetAreaSizeInHaLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.targetAreaSizeInHaValue',
                    params: {
                        count: 0,
                    },
                },
            },
            {
                type: 'dose',
                matIconName: 'water_drop',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.totalDoseLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.totalDoseValue',
                    params: { count: 0 },
                },
            },
            {
                type: 'distance',
                matIconName: 'location_on',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.distanceInKmLabel',
                value: {
                    valueKey:
                        'MissionDetailsPage.detailsGridItem.detailsItem.distanceInKmValue',
                    params: { count: 0 },
                },
            },
            {
                type: 'comment',
                matIconName: 'chat',
                labelKey:
                    'MissionDetailsPage.detailsGridItem.detailsItem.commentLabel',
                value: '',
            },
        ],
    },

    suppliesGridItemVM: {
        titleKey: 'MissionDetailsPage.suppliesMissionGridItem.title',
        supplyItemXVMs: [
            {
                name: 'Herbicide Solution A',
                quantity: 114.5,
                unit: 'litre',
            },
            { name: 'Battery Packs', quantity: 4, unit: 'unit' },
            { name: 'Spray Nozzles', quantity: 8, unit: 'unit' },
            { name: 'Calibration Kit', quantity: 1, unit: 'unit' },
        ],
    },

    messagesGridItemVM: {
        submitButtonTextKey:
            'MissionDetailsPage.messagesGridItem.submitButtonText',
        titleKey: 'MissionDetailsPage.messagesGridItem.title',
        dateValueKey: 'MissionDetailsPage.messagesGridItem.dateValue',
        messageItemXVMs: [
            {
                backgroundImageSrc: 'assets/farming.jpg',
                altText: 'alt',
                name: 'System Admin',
                message:
                    'Order created and awaiting approval. Please review mission details and supplies list.',
                date: new Date('2025-04-01T09:15:00'),
            },
        ],
    },
};
