import { MatIcon } from '@interfaces/mat-icon.enum';
import { ProgressFormControlVM } from './progress-form-control.model';

export const enMock = {
    logTitle: 'log',
    abortText: 'abort',
    updateSection: {
        title: 'update',
        progressGroups: {
            group1: {
                label: 'lab1',
                items: {
                    item1: {
                        buttonText: 'button1',
                    },
                    item2: {
                        buttonText: 'button2',
                    },
                    item3: {
                        buttonText: 'button3',
                    },

                    item4: {
                        buttonText: 'button4',
                    },
                    item5: {
                        buttonText: 'button5',
                    },
                },
            },
            group2: {
                label: 'lab2',
            },
            group3: {
                label: 'lab3',
            },
        },
    },
};

export const mockVM: ProgressFormControlVM = {
    logItems: [],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [],
    },
};

export const mockVMWithoutProgressGroup: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [],
    },
};
export const mockVMWithOneProgressGroup: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
        ],
    },
};
export const mockVMWithThreeProgressGroup: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
            {
                labelKey: enMock.updateSection.progressGroups.group2.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
            {
                labelKey: enMock.updateSection.progressGroups.group3.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
        ],
    },
};
export const mockVMWithAllDifferentProgressGroup: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
            {
                labelKey: enMock.updateSection.progressGroups.group2.label,
                stepIndicatorXVM: { color: 'green' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
            {
                labelKey: enMock.updateSection.progressGroups.group3.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
        ],
    },
};
export const mockVMWithoutProgressItem: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [],
                },
            },
        ],
    },
};
export const mockVMWithOneProgressItem: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [
                        {
                            type: 'abort',
                            buttonTextKey:
                                enMock.updateSection.progressGroups.group1.items
                                    .item1.buttonText,
                            color: 'blue',
                            disabled: true,
                            matIconName: MatIcon.CALENDAR_MONTH,
                        },
                    ],
                },
            },
        ],
    },
};
export const mockVMWithThreeProgressItem: ProgressFormControlVM = {
    logItems: [
        {
            type: 'abort',
            creationDate: new Date(),
            text: enMock.abortText,
        },
    ],
    creationDateValueKey: '',
    logsSectionCardXVM: { titleKey: enMock.logTitle },
    updateSectionCardXVM: {
        titleKey: enMock.updateSection.title,
        progressGroupXVMs: [
            {
                labelKey: enMock.updateSection.progressGroups.group1.label,
                stepIndicatorXVM: { color: 'blue' },
                progressItemListXVM: {
                    progressItemXVMs: [
                        {
                            type: 'abort',
                            buttonTextKey:
                                enMock.updateSection.progressGroups.group1.items
                                    .item1.buttonText,
                            color: 'blue',
                            disabled: true,
                            matIconName: MatIcon.CALENDAR_MONTH,
                        },
                        {
                            type: 'abort',
                            buttonTextKey:
                                enMock.updateSection.progressGroups.group1.items
                                    .item2.buttonText,
                            color: 'blue',
                            disabled: true,
                            matIconName: MatIcon.CALENDAR_MONTH,
                        },
                        {
                            type: 'abort',
                            buttonTextKey:
                                enMock.updateSection.progressGroups.group1.items
                                    .item3.buttonText,
                            color: 'blue',
                            disabled: true,
                            matIconName: MatIcon.CALENDAR_MONTH,
                        },
                    ],
                },
            },
        ],
    },
};
export const mockVMWithProgressItemWithAllDifferentStates: ProgressFormControlVM =
    {
        logItems: [
            {
                type: 'abort',
                creationDate: new Date(),
                text: enMock.abortText,
            },
        ],
        creationDateValueKey: '',
        logsSectionCardXVM: { titleKey: enMock.logTitle },
        updateSectionCardXVM: {
            titleKey: enMock.updateSection.title,
            progressGroupXVMs: [
                {
                    labelKey: enMock.updateSection.progressGroups.group1.label,
                    stepIndicatorXVM: { color: 'blue' },
                    progressItemListXVM: {
                        progressItemXVMs: [
                            {
                                type: 'abort',
                                buttonTextKey:
                                    enMock.updateSection.progressGroups.group1
                                        .items.item1.buttonText,
                                color: 'blue',
                                disabled: true,
                                matIconName: MatIcon.CALENDAR_MONTH,
                            },
                            {
                                type: 'abort',
                                buttonTextKey:
                                    enMock.updateSection.progressGroups.group1
                                        .items.item2.buttonText,
                                color: 'blue',
                                disabled: false,
                                matIconName: MatIcon.CALENDAR_MONTH,
                            },
                            {
                                type: 'abort',
                                buttonTextKey:
                                    enMock.updateSection.progressGroups.group1
                                        .items.item3.buttonText,
                                color: 'green',
                                disabled: false,
                                matIconName: MatIcon.CALENDAR_MONTH,
                            },
                            {
                                type: 'abort',
                                buttonTextKey:
                                    enMock.updateSection.progressGroups.group1
                                        .items.item4.buttonText,
                                color: 'orange',
                                disabled: false,
                                matIconName: MatIcon.CALENDAR_MONTH,
                            },
                            {
                                type: 'abort',
                                buttonTextKey:
                                    enMock.updateSection.progressGroups.group1
                                        .items.item5.buttonText,
                                color: 'red',
                                disabled: false,
                                matIconName: MatIcon.CALENDAR_MONTH,
                            },
                        ],
                    },
                },
            ],
        },
    };
