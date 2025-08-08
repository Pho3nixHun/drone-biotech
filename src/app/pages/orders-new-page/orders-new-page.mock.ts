import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrdersNewPageVM } from './orders-new-page.model';

export const ordersNewPageVMDefault: OrdersNewPageVM = {
    frameXVM: {
        titleKey: 'OrdersNewPage.title',
        submitButtonTextKey: 'OrdersNewPage.submitButtonText',
        emailLabelKey: 'OrdersNewPage.emailLabel',
        endCustomerLabelKey: 'OrdersNewPage.endCustomerLabel',
        nameLabelKey: 'OrdersNewPage.nameLabel',
        phoneNumberLabelKey: 'OrdersNewPage.phoneNumberLabel',
        internalOrderNumberLabelKey: 'OrdersNewPage.internalOrderNumberLabel',

        areasDataFormControlVM: {
            sectionHeaderXVM: {
                titleKey: 'OrdersNewPage.areasDataLabel',
                addButtonMatIcon: MatIcon.ADD,
            },

            cardGroupXVM: {
                cardGroupHeaderXVM: [
                    'OrdersNewPage.areasDataFormControl.missionHeader',
                    'OrdersNewPage.areasDataFormControl.targetAreaSizeHeader',
                    'OrdersNewPage.areasDataFormControl.entryPointHeader',
                    'OrdersNewPage.areasDataFormControl.doseHeader',
                    'OrdersNewPage.areasDataFormControl.applicationDateHeader',
                    'OrdersNewPage.areasDataFormControl.trichogrammaRequirementHeader',
                    'OrdersNewPage.areasDataFormControl.distanceFromHeadOfficeHeader',
                    'OrdersNewPage.areasDataFormControl.commentHeader',
                    'OrdersNewPage.areasDataFormControl.actionsHeader',
                ],
                cardItemListXVM: {
                    cardItemXVM: {
                        cardItemContentXVM: {
                            commentLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.commentLabel',
                            dateLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.applicationDateLabel',
                            distanceLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.distanceFromHeadOfficeLabel',
                            doseLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.doseLabel',
                            entryPointLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.entryPointLabel',
                            missionLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.missionLabel',
                            targetAreaSizeLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.targetAreaSizeLabel',
                            trichogrammaRequirementLabelKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.trichogrammaRequirementLabel',
                            applicationDateValueKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.applicationDateValue',
                            distanceFromHeadOfficeValueKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.distanceFromHeadOfficeValue',
                            doseValueKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.doseValue',
                            trichogrammaRequirementValueKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.trichogrammaRequirementValue',
                            targetAreaSizeValueKey:
                                'OrdersNewPage.areasDataFormControl.cardItem.targetAreaSizeValue',
                        },
                        cardItemActionListXVM: {
                            deleteButtonMatIcon: MatIcon.DELETE,
                            editButtonMatIcon: MatIcon.EDIT,
                        },
                    },
                },
                cardGroupSummaryXVM: {
                    cardGroupSummaryHeaderXVM: [
                        'OrdersNewPage.areasDataFormControl.totalTargetAreaSizeHeader',
                        'OrdersNewPage.areasDataFormControl.totalTrichogrammaRequirementHeader',
                        'OrdersNewPage.areasDataFormControl.totalDistanceFromHeadOfficeHeader',
                    ],
                    cardGroupSummaryContentXVM: {
                        totalTargetAreaSizeValueKey:
                            'OrdersNewPage.areasDataFormControl.totalTargetAreaSizeValue',
                        totalTrichogrammaRequirementValueKey:
                            'OrdersNewPage.areasDataFormControl.totalTrichogrammaRequirementValue',
                        totalDistanceFromHeadOfficeValueKey:
                            'OrdersNewPage.areasDataFormControl.totalDistanceFromHeadOfficeValue',
                    },
                },
            },

            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                coordinatesLabelKey:
                    'OrdersNewPage.areasDataDialog.coordinatesLabel',
                commentLabelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                missionNameLabelKey:
                    'OrdersNewPage.areasDataDialog.missionNameLabel',
                cancelButtonTextKey:
                    'OrdersNewPage.areasDataDialog.cancelButtonText',
                submitButtonTextKey:
                    'OrdersNewPage.areasDataDialog.submitButtonText',
                applicationDateLabelKey:
                    'OrdersNewPage.areasDataDialog.applicationDateLabel',
                dosePerHqLabelKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqLabel',
                entryPointLabelKey:
                    'OrdersNewPage.areasDataDialog.entryPointLabelKey',
                targetAreaLabelKey:
                    'OrdersNewPage.areasDataDialog.targetAreaLabelKey',
                mapFormControlVM: {
                    defaultCenter: null,
                    mapSearchInputFormControlVM: {
                        distanceValueKey:
                            'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.distanceValue',
                        placeholderKey:
                            'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.placeholder',
                    },
                    mapAreaSelectFormControlVM: {
                        areaValueKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.areaValueKey',
                        addButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                        editButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                        deleteButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                        coordinatesLabelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                    mapPointSelectFormControlVM: {
                        addButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                        deleteButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                    },
                },
                areaData: null,
                titleKey: 'OrdersNewPage.areasDataDialog.title.add',
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                coordinatesLabelKey:
                    'OrdersNewPage.areasDataDialog.coordinatesLabel',
                commentLabelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                missionNameLabelKey:
                    'OrdersNewPage.areasDataDialog.missionNameLabel',
                cancelButtonTextKey:
                    'OrdersNewPage.areasDataDialog.cancelButtonText',
                submitButtonTextKey:
                    'OrdersNewPage.areasDataDialog.submitButtonText',
                applicationDateLabelKey:
                    'OrdersNewPage.areasDataDialog.applicationDateLabel',
                dosePerHqLabelKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqLabel',
                entryPointLabelKey:
                    'OrdersNewPage.areasDataDialog.entryPointLabelKey',
                targetAreaLabelKey:
                    'OrdersNewPage.areasDataDialog.targetAreaLabelKey',
                mapFormControlVM: {
                    defaultCenter: null,
                    mapSearchInputFormControlVM: {
                        distanceValueKey:
                            'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.distanceValue',
                        placeholderKey:
                            'OrdersNewPage.areasDataDialog.mapSearchInputFormControlVM.placeholder',
                    },
                    mapAreaSelectFormControlVM: {
                        areaValueKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.areaValueKey',
                        addButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                        editButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                        deleteButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                        coordinatesLabelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                    mapPointSelectFormControlVM: {
                        addButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                        deleteButtonTextKey:
                            'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                    },
                },

                areaData: null,
                titleKey: 'OrdersNewPage.areasDataDialog.title.edit',
            },

            deleteDialogVM: {
                type: 'deleteDialogVM',
                titleKey: 'OrdersNewPage.deleteDialog.title',
                warningTextKey: 'OrdersNewPage.deleteDialog.warningText',
                submitButtonTextKey:
                    'OrdersNewPage.deleteDialog.submitButtonText',
                cancelButtonTextKey:
                    'OrdersNewPage.deleteDialog.cancelButtonText',
            },
        },
    },
};

export const enMock = {
    coordinatesLabel: 'coords',
    commentLabel: 'comment',
    missionLabel: 'mission',
    frameTitle: 'tit',
    submitButtonText: 'sub',
    emailLabel: 'email',
    endCustomerLabel: 'endCustomer',
    nameLabel: 'nameLab',
    phoneNumberLabel: 'phoneNumber',
    internalOrderNumberLabel: 'internal',
    areasDataLabel: 'areasData',
    cancelButtonText: 'cancelButton',
    applicationDateLabel: 'applicationDate',
    dosePerHqLabel: 'dosePer',
    entryPointLabel: 'entryPoint',
    targetAreaLabel: 'targetArea',
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    title: 'ti',
    type: 'areaDataDialogVM',
    actionsHeader: 'actions',
    targetAreaSizeHeader: 'targetAreaSize',
    entryPointHeader: 'entryPoint',
    doseHeader: 'dose',
    applicationDateHeader: 'application',
    trichogrammaRequirementHeader: 'trichogrammaRequirement',
    distanceFromHeadOfficeHeader: 'distanceFromHeadOffice',
    totalDistanceFromHeadOfficeHeader: 'totalDistanceFromHeadOffice',
    totalTargetAreaSizeHeader: 'totalTargetAreaSize',
    totalTrichogrammaRequirementHeader: 'totalTrichogrammaRequirement',
    applicationDateValue: 'applicationDate',
    distanceFromHeadOfficeValue: 'distanceFromHeadOffice',
    doseValue: 'doseValue',
    entryPointValue: '',
    targetAreaSizeValue: 'targetAreaSize',
    trichogrammaRequirementValue: 'trichogrammaRequirement',
    warning: 'warn',
    placeholder: 'place',
    distanceValue: 'distance',
    commentHeader: 'comment',
    missionHeader: 'mission',
    areaValue: 'area',
    editButton: 'edit',
};

export const ordersNewPageVMMock: OrdersNewPageVM = {
    frameXVM: {
        titleKey: enMock.frameTitle,
        submitButtonTextKey: enMock.submitButtonText,
        emailLabelKey: enMock.emailLabel,
        endCustomerLabelKey: enMock.endCustomerLabel,
        nameLabelKey: enMock.nameLabel,
        phoneNumberLabelKey: enMock.phoneNumberLabel,
        internalOrderNumberLabelKey: enMock.internalOrderNumberLabel,

        areasDataFormControlVM: {
            sectionHeaderXVM: {
                titleKey: enMock.areasDataLabel,
                addButtonMatIcon: MatIcon.ADD,
            },
            cardGroupXVM: {
                cardGroupHeaderXVM: [
                    enMock.actionsHeader,
                    enMock.targetAreaSizeHeader,
                    enMock.entryPointHeader,
                    enMock.doseHeader,
                    enMock.applicationDateHeader,
                    enMock.trichogrammaRequirementHeader,
                    enMock.distanceFromHeadOfficeHeader,
                    enMock.missionHeader,
                    enMock.commentHeader,
                ],
                cardItemListXVM: {
                    cardItemXVM: {
                        cardItemContentXVM: {
                            commentLabelKey: enMock.commentLabel,
                            dateLabelKey: enMock.applicationDateLabel,
                            distanceLabelKey:
                                enMock.distanceFromHeadOfficeHeader,
                            doseLabelKey: enMock.dosePerHqLabel,
                            entryPointLabelKey: enMock.entryPointLabel,
                            missionLabelKey: enMock.missionLabel,
                            targetAreaSizeLabelKey: enMock.targetAreaLabel,
                            trichogrammaRequirementLabelKey:
                                enMock.trichogrammaRequirementHeader,
                            doseValueKey: enMock.doseValue,
                            applicationDateValueKey:
                                enMock.applicationDateHeader,
                            distanceFromHeadOfficeValueKey:
                                enMock.distanceFromHeadOfficeValue,
                            targetAreaSizeValueKey: enMock.targetAreaSizeValue,
                            trichogrammaRequirementValueKey:
                                enMock.trichogrammaRequirementValue,
                        },
                        cardItemActionListXVM: {
                            deleteButtonMatIcon: MatIcon.DELETE,
                            editButtonMatIcon: MatIcon.EDIT,
                        },
                    },
                },
                cardGroupSummaryXVM: {
                    cardGroupSummaryHeaderXVM: [
                        enMock.totalTargetAreaSizeHeader,
                        enMock.totalDistanceFromHeadOfficeHeader,
                        enMock.totalTrichogrammaRequirementHeader,
                    ],
                    cardGroupSummaryContentXVM: {
                        totalDistanceFromHeadOfficeValueKey:
                            enMock.distanceFromHeadOfficeHeader,
                        totalTargetAreaSizeValueKey: enMock.targetAreaSizeValue,
                        totalTrichogrammaRequirementValueKey:
                            enMock.trichogrammaRequirementValue,
                    },
                },
            },
            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                coordinatesLabelKey: enMock.coordinatesLabel,
                commentLabelKey: enMock.commentLabel,
                missionNameLabelKey: enMock.missionLabel,
                cancelButtonTextKey: enMock.cancelButtonText,
                submitButtonTextKey: enMock.submitButtonText,
                applicationDateLabelKey: enMock.applicationDateLabel,
                dosePerHqLabelKey: enMock.dosePerHqLabel,
                entryPointLabelKey: enMock.entryPointLabel,
                targetAreaLabelKey: enMock.targetAreaLabel,
                mapFormControlVM: {
                    defaultCenter: null,
                    mapSearchInputFormControlVM: {
                        placeholderKey: enMock.placeholder,
                        distanceValueKey: enMock.distanceValue,
                    },
                    mapAreaSelectFormControlVM: {
                        areaValueKey: enMock.areaValue,
                        addButtonTextKey: enMock.addButtonText,
                        deleteButtonTextKey: enMock.deleteButtonText,
                        coordinatesLabelKey: enMock.coordinatesLabel,
                        editButtonTextKey: enMock.editButton,
                    },
                    mapPointSelectFormControlVM: {
                        addButtonTextKey: enMock.addButtonText,
                        deleteButtonTextKey: enMock.deleteButtonText,
                    },
                },
                areaData: null,
                titleKey: enMock.title,
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                coordinatesLabelKey: enMock.coordinatesLabel,
                commentLabelKey: enMock.commentLabel,
                missionNameLabelKey: enMock.missionLabel,
                cancelButtonTextKey: enMock.cancelButtonText,
                submitButtonTextKey: enMock.submitButtonText,
                applicationDateLabelKey: enMock.applicationDateLabel,
                dosePerHqLabelKey: enMock.dosePerHqLabel,
                entryPointLabelKey: enMock.entryPointLabel,
                targetAreaLabelKey: enMock.targetAreaLabel,
                mapFormControlVM: {
                    defaultCenter: null,

                    mapSearchInputFormControlVM: {
                        placeholderKey: enMock.placeholder,
                        distanceValueKey: enMock.distanceValue,
                    },
                    mapAreaSelectFormControlVM: {
                        areaValueKey: enMock.areaValue,
                        addButtonTextKey: enMock.addButtonText,
                        editButtonTextKey: enMock.editButton,
                        deleteButtonTextKey: enMock.deleteButtonText,
                        coordinatesLabelKey: enMock.coordinatesLabel,
                    },
                    mapPointSelectFormControlVM: {
                        addButtonTextKey: enMock.addButtonText,
                        deleteButtonTextKey: enMock.deleteButtonText,
                    },
                },

                areaData: null,
                titleKey: enMock.title,
            },

            deleteDialogVM: {
                type: 'deleteDialogVM',
                titleKey: enMock.title,
                warningTextKey: enMock.warning,
                submitButtonTextKey: enMock.submitButtonText,
                cancelButtonTextKey: enMock.cancelButtonText,
            },
        },
    },
};
