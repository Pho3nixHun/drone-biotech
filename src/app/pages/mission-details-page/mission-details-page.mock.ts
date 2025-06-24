import { Rel } from '@interfaces/with-link.interface';
import { MissionDetailsPageVM } from './mission-details-page.model';
import { FormDialogComponent } from './components/progress-update-form-control/components/form-dialog/form-dialog.component';
import { Validators } from '@angular/forms';
import { emptyStringValidator } from '@utils/empty-string.validator';

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

    progressGridItemVM: {
        titleKey: 'MissionDetailsPage.progressGridItem.title',
        formControlVM: {
            statusFrameVM: {
                titleKey:
                    'MissionDetailsPage.progressGridItem.statusFrame.title',
                progressItemGroupVMs: [
                    {
                        type: 'preparation',
                        titleKey: 'MissionDetailsPage.preparation.title',
                        progressItemVMs: [
                            {
                                type: 'cancel',
                                roles: ['customer'],
                                availableAt: ['pending'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.cancel.title',
                                        confirmTextKey:
                                            'MissionDetailsPage.progressItem.cancel.confirmText',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'textarea',
                                                controlName: 'reason',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.cancel.textarea.label',
                                                initialValue: '',
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'cancel',
                                roles: ['office'],
                                availableAt: [
                                    'abandoned',
                                    'active',
                                    'pending',
                                    'in-progress',
                                ],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.cancel.title',
                                        confirmTextKey:
                                            'MissionDetailsPage.progressItem.cancel.confirmText',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'textarea',
                                                controlName: 'reason',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.cancel.textarea.label',
                                                initialValue: '',
                                                validators: [
                                                    Validators.required,
                                                    emptyStringValidator,
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'assign',
                                availableAt: ['active'],
                                roles: ['office'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.assign.title',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'dropdown',
                                                initialValue: null,
                                                controlName: 'agent',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.assign.dropdown.label',
                                                validators: Validators.required,
                                                items: [
                                                    {
                                                        value: 'option1',
                                                        label: 'Messi',
                                                    },
                                                    {
                                                        value: 'option2',
                                                        label: 'Ronaldo',
                                                    },
                                                    {
                                                        value: 'option3',
                                                        label: 'Neymar',
                                                    },
                                                    {
                                                        value: 'option4',
                                                        label: 'Kroos',
                                                    },
                                                    {
                                                        value: 'option5',
                                                        label: 'Modric',
                                                    },
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'accept',
                                availableAt: ['pending'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    statusType: 'accept',
                                    date: new Date(),
                                    description: 'Mission accepted',
                                },
                            },
                            {
                                type: 'reject',
                                availableAt: ['pending'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.reject.title',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'textarea',
                                                controlName: 'reason',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.reject.textarea.label',
                                                initialValue: '',
                                                validators: [
                                                    Validators.required,
                                                    emptyStringValidator,
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'travel',
                                availableAt: ['active'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.travel.title',
                                        formGroupConfig: [],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                availableAt: ['active'],
                                type: 'arrive',
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.arrive.title',
                                        formGroupConfig: [],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                        ],
                    },
                    {
                        type: 'execution',
                        titleKey: 'MissionDetailsPage.execution.title',
                        progressItemVMs: [
                            {
                                type: 'start',
                                availableAt: ['active'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.start.title',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'number',
                                                controlName: 'dose',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.start.dose.label',
                                                initialValue: null,
                                                validators: [
                                                    Validators.required,
                                                    Validators.min(0),
                                                ],
                                            },
                                            {
                                                abstractControlType: 'group',
                                                fieldType: 'checklistgroup',
                                                controlName: 'items',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.start.checklist.label',
                                                items: [
                                                    {
                                                        abstractControlType:
                                                            'control',
                                                        fieldType: 'checkbox',
                                                        controlLabelKey:
                                                            'Egyeske',
                                                        controlName: 'egyes',
                                                        initialValue: false,
                                                    },
                                                    {
                                                        abstractControlType:
                                                            'control',
                                                        fieldType: 'checkbox',
                                                        controlName: 'kettes',
                                                        initialValue: false,
                                                        controlLabelKey:
                                                            'Ketteske',
                                                    },
                                                ],
                                            },
                                            {
                                                abstractControlType: 'group',
                                                fieldType: 'filegroup',
                                                controlName: 'file',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.start.file.label',
                                                item: {
                                                    abstractControlType:
                                                        'control',
                                                    fieldType: 'file',
                                                    accept: '.json',
                                                    controlName: 'jsonfile',
                                                    controlLabelKey:
                                                        'MissionDetailsPage.progressItem.start.file.file.label',
                                                    initialValue: '',
                                                    validators:
                                                        Validators.required,
                                                },
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'progress',
                                availableAt: ['in-progress', 'abandoned'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.progress.title',
                                        confirmTextKey:
                                            'MissionDetailsPage.progressItem.progress.confirmText',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'number',
                                                controlName: 'dose',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.progress.dose.label',
                                                initialValue: null,
                                                validators: [
                                                    Validators.required,
                                                    Validators.min(0),
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'abort',
                                availableAt: ['in-progress'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        type: 'formDialogVM',
                                        titleKey:
                                            'MissionDetailsPage.progressItem.abort.title',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'textarea',
                                                controlName: 'reason',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.abort.textarea.label',
                                                initialValue: '',
                                                validators: [
                                                    Validators.required,
                                                    emptyStringValidator,
                                                ],
                                            },
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'dropdown',
                                                initialValue: null,
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.abort.dropdown.label',
                                                controlName: 'lostparts',
                                                validators: Validators.required,
                                                items: [
                                                    {
                                                        label: 'option1',
                                                        value: 'Kerék',
                                                    },
                                                    {
                                                        label: 'option2',
                                                        value: 'Asztal',
                                                    },
                                                    {
                                                        label: 'option3',
                                                        value: 'Benzin',
                                                    },
                                                    {
                                                        label: 'option4',
                                                        value: 'Stb',
                                                    },
                                                ],
                                            },
                                            {
                                                abstractControlType: 'control',
                                                fieldType: 'number',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.abort.number.label',
                                                controlName: 'quantity',
                                                initialValue: null,
                                                validators: [
                                                    Validators.required,
                                                    Validators.min(0),
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                            {
                                type: 'complete',
                                availableAt: ['abandoned', 'in-progress'],
                                roles: ['office', 'pilot'],
                                disabled: false,
                                matIconName: 'keyboard_arrow_right',
                                actionType: {
                                    component: FormDialogComponent,
                                    vm: {
                                        titleKey:
                                            'MissionDetailsPage.progressItem.complete.title',
                                        type: 'formDialogVM',
                                        formGroupConfig: [
                                            {
                                                abstractControlType: 'group',
                                                fieldType: 'filegroup',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.complete.file.label',
                                                controlName: 'file',
                                                item: {
                                                    abstractControlType:
                                                        'control',
                                                    fieldType: 'file',
                                                    controlName: 'file',
                                                    controlLabelKey:
                                                        'MissionDetailsPage.progressItem.complete.file.label',
                                                    accept: '.json',
                                                    initialValue: '',
                                                    validators:
                                                        Validators.required,
                                                },
                                            },
                                            {
                                                abstractControlType: 'group',
                                                fieldType: 'checklistgroup',
                                                controlLabelKey:
                                                    'MissionDetailsPage.progressItem.complete.checklist.label',
                                                controlName: 'checklist',
                                                items: [
                                                    {
                                                        abstractControlType:
                                                            'control',
                                                        fieldType: 'checkbox',
                                                        controlLabelKey: 'Box1',
                                                        controlName: 'box1',
                                                        initialValue: false,
                                                    },
                                                    {
                                                        abstractControlType:
                                                            'control',
                                                        fieldType: 'checkbox',
                                                        controlLabelKey: 'Box2',
                                                        controlName: 'box2',
                                                        initialValue: false,
                                                    },
                                                ],
                                            },
                                        ],
                                        cancelButtonTextKey:
                                            'MissionDetailsPage.formDialog.cancelButtonText',
                                        submitButtonTextKey:
                                            'MissionDetailsPage.formDialog.submitButtonText',
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            logFrameVM: {
                titleKey: 'MissionDetailsPage.progressGridItem.logFrame.title',
                logItemVMs: [],
                progressItemDateValueKey:
                    'MissionDetailsPage.progressGridItem.logFrame.progressItemDateValue',
            },
        },
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

    progressGridItemVM: {
        titleKey: 'MissionDetailsPage.progressGridItem.title',
        formControlVM: {
            statusFrameVM: {
                titleKey:
                    'MissionDetailsPage.progressGridItem.statusFrame.title',
                progressItemGroupVMs: [],
            },
            logFrameVM: {
                titleKey: 'MissionDetailsPage.progressGridItem.logFrame.title',
                logItemVMs: [],
                progressItemDateValueKey:
                    'MissionDetailsPage.progressGridItem.logFrame.progressItemDateValue',
            },
        },
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
