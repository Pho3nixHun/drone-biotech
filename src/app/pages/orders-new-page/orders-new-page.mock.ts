import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrdersNewPageVM } from './orders-new-page-vm.model';

export const ordersNewPageVMDefault: OrdersNewPageVM = {
    frameXVM: {
        titleKey: 'OrdersNewPage.title',
        submitButtonXVM: {
            type: 'withText',
            textKey: 'OrdersNewPage.submitButtonText',
            secondary: false,
            variant: 'fill',
        },
        emailLabelKey: 'OrdersNewPage.emailLabel',
        endCustomerLabelKey: 'OrdersNewPage.endCustomerLabel',
        nameLabelKey: 'OrdersNewPage.nameLabel',
        phoneNumberLabelKey: 'OrdersNewPage.phoneNumberLabel',
        internalOrderNumberLabelKey: 'OrdersNewPage.internalOrderNumberLabel',
        areasDataLabelKey: 'OrdersNewPage.areasDataLabel',

        areasDataFormControlVM: {
            addButtonVM: {
                type: 'withIcon',
                icon: MatIcon.ADD,
                variant: 'ghost',
            },
            deleteButtonVM: {
                type: 'withIcon',
                icon: MatIcon.DELETE,
                secondary: true,
                variant: 'ghost',
            },
            editButtonVM: {
                type: 'withIcon',
                icon: MatIcon.EDIT,
                secondary: true,
                variant: 'ghost',
            },
            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                closeButtonVM: {
                    type: 'withIcon',
                    icon: MatIcon.CLOSE,
                    secondary: true,
                    variant: 'ghost',
                },
                cancelButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.areasDataDialog.cancelButtonText',
                    secondary: true,
                    variant: 'ghost',
                },
                coordinatesLabelKey:
                    'OrdersNewPage.areasDataDialog.coordinatesLabel',
                commentLabelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                missionNameLabelKey:
                    'OrdersNewPage.areasDataDialog.missionNameLabel',
                submitButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.areasDataDialog.submitButtonText',
                    variant: 'fill',
                },
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
                        addButtonVM: {
                            type: 'withText',
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                        },
                        editButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                        },
                        coordinatesLabelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                    mapPointSelectFormControlVM: {
                        addButtonVM: {
                            type: 'withText',
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                        },
                    },
                },
                areaData: null,
                titleKey: 'OrdersNewPage.areasDataDialog.title.add',
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                closeButtonVM: {
                    type: 'withIcon',
                    icon: MatIcon.CLOSE,
                    secondary: true,
                    variant: 'ghost',
                },
                coordinatesLabelKey:
                    'OrdersNewPage.areasDataDialog.coordinatesLabel',
                commentLabelKey: 'OrdersNewPage.areasDataDialog.commentLabel',
                missionNameLabelKey:
                    'OrdersNewPage.areasDataDialog.missionNameLabel',
                submitButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.areasDataDialog.submitButtonText',
                    variant: 'fill',
                },
                cancelButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.areasDataDialog.cancelButtonText',
                    secondary: true,
                    variant: 'ghost',
                },
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
                        addButtonVM: {
                            type: 'withText',
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                        },
                        editButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.editButtonText',
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                        },
                        coordinatesLabelKey:
                            'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.coordinatesLabel',
                    },
                    mapPointSelectFormControlVM: {
                        addButtonVM: {
                            type: 'withText',
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey:
                                'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                        },
                    },
                },

                areaData: null,
                titleKey: 'OrdersNewPage.areasDataDialog.title.edit',
            },

            deleteDialogVM: {
                type: 'deleteDialogVM',
                closeButtonVM: {
                    type: 'withIcon',
                    icon: MatIcon.CLOSE,
                    secondary: true,
                    variant: 'ghost',
                },
                titleKey: 'OrdersNewPage.deleteDialog.title',
                warningTextKey: 'OrdersNewPage.deleteDialog.warningText',
                deleteButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.deleteDialog.submitButtonText',
                    variant: 'fill',
                },
                cancelButtonVM: {
                    type: 'withText',
                    textKey: 'OrdersNewPage.deleteDialog.cancelButtonText',
                    secondary: true,
                    variant: 'ghost',
                },
            },
            actionsHeaderKey:
                'OrdersNewPage.areasDataFormControl.actionsHeader',
            targetAreaSizeHeaderKey:
                'OrdersNewPage.areasDataFormControl.targetAreaSizeHeader',
            entryPointHeaderKey:
                'OrdersNewPage.areasDataFormControl.entryPointHeader',
            doseHeaderKey: 'OrdersNewPage.areasDataFormControl.doseHeader',
            applicationDateHeaderKey:
                'OrdersNewPage.areasDataFormControl.applicationDateHeader',
            trichogrammaRequirementHeaderKey:
                'OrdersNewPage.areasDataFormControl.trichogrammaRequirementHeader',
            distanceFromHeadOfficeHeaderKey:
                'OrdersNewPage.areasDataFormControl.distanceFromHeadOfficeHeader',
            totalDistanceFromHeadOfficeHeaderKey:
                'OrdersNewPage.areasDataFormControl.totalDistanceFromHeadOfficeHeader',
            totalTargetAreaSizeHeaderKey:
                'OrdersNewPage.areasDataFormControl.totalTargetAreaSizeHeader',
            totalTrichogrammaRequirementHeaderKey:
                'OrdersNewPage.areasDataFormControl.totalTrichogrammaRequirementHeader',
            applicationDateValueKey:
                'OrdersNewPage.areasDataFormControl.applicationDateValue',
            distanceFromHeadOfficeValueKey:
                'OrdersNewPage.areasDataFormControl.distanceFromHeadOfficeValue',
            doseValueKey: 'OrdersNewPage.areasDataFormControl.doseValue',
            entryPointValueKey: '',
            targetAreaSizeValueKey:
                'OrdersNewPage.areasDataFormControl.targetAreaSizeValue',
            trichogrammaRequirementValueKey:
                'OrdersNewPage.areasDataFormControl.trichogrammaRequirementValue',
            commentHeaderKey:
                'OrdersNewPage.areasDataFormControl.commentHeader',
            missionHeaderKey:
                'OrdersNewPage.areasDataFormControl.missionHeader',
        },
    },
};

export const enMock = {
    closeButtonText: 'close',
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
        submitButtonXVM: {
            type: 'withText',
            variant: 'fill',
            secondary: false,
            textKey: enMock.submitButtonText,
        },
        emailLabelKey: enMock.emailLabel,
        endCustomerLabelKey: enMock.endCustomerLabel,
        nameLabelKey: enMock.nameLabel,
        phoneNumberLabelKey: enMock.phoneNumberLabel,
        internalOrderNumberLabelKey: enMock.internalOrderNumberLabel,
        areasDataLabelKey: enMock.areasDataLabel,

        areasDataFormControlVM: {
            addButtonVM: {
                type: 'withIcon',
                secondary: false,
                variant: 'ghost',
                icon: MatIcon.ADD,
            },
            editButtonVM: {
                type: 'withIcon',
                secondary: false,
                variant: 'ghost',
                icon: MatIcon.EDIT,
            },
            deleteButtonVM: {
                type: 'withIcon',
                secondary: false,
                variant: 'ghost',
                icon: MatIcon.DELETE,
            },

            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                closeButtonVM: {
                    type: 'withText',
                    textKey: enMock.closeButtonText,
                    secondary: false,
                    variant: 'fill',
                },
                coordinatesLabelKey: enMock.coordinatesLabel,
                commentLabelKey: enMock.commentLabel,
                missionNameLabelKey: enMock.missionLabel,
                cancelButtonVM: {
                    type: 'withText',
                    textKey: enMock.cancelButtonText,
                    secondary: false,
                    variant: 'fill',
                },
                submitButtonVM: {
                    type: 'withText',
                    textKey: enMock.cancelButtonText,
                    secondary: false,
                    variant: 'fill',
                },
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
                        addButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.addButtonText,
                        },
                        editButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.deleteButtonText,
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.editButton,
                        },
                        coordinatesLabelKey: enMock.coordinatesLabel,
                    },
                    mapPointSelectFormControlVM: {
                        addButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.addButtonText,
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.deleteButtonText,
                        },
                    },
                },
                areaData: null,
                titleKey: enMock.title,
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                closeButtonVM: {
                    type: 'withIcon',
                    icon: MatIcon.CLOSE,
                    secondary: false,
                    variant: 'fill',
                },
                coordinatesLabelKey: enMock.coordinatesLabel,
                commentLabelKey: enMock.commentLabel,
                missionNameLabelKey: enMock.missionLabel,
                cancelButtonVM: {
                    type: 'withText',
                    textKey: enMock.cancelButtonText,
                    secondary: false,
                    variant: 'fill',
                },
                submitButtonVM: {
                    type: 'withText',
                    textKey: enMock.submitButtonText,
                    secondary: false,
                    variant: 'fill',
                },
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
                        addButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.addButtonText,
                        },
                        editButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.deleteButtonText,
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.editButton,
                        },
                        coordinatesLabelKey: enMock.coordinatesLabel,
                    },
                    mapPointSelectFormControlVM: {
                        addButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.addButtonText,
                        },
                        deleteButtonVM: {
                            type: 'withText',
                            secondary: true,
                            variant: 'ghost',
                            textKey: enMock.deleteButtonText,
                        },
                    },
                },

                areaData: null,
                titleKey: enMock.title,
            },

            deleteDialogVM: {
                type: 'deleteDialogVM',
                closeButtonVM: {
                    type: 'withIcon',
                    icon: MatIcon.CLOSE,
                    secondary: true,
                    variant: 'ghost',
                },
                titleKey: enMock.title,
                warningTextKey: enMock.warning,
                cancelButtonVM: {
                    type: 'withText',
                    textKey: enMock.cancelButtonText,
                    secondary: false,
                    variant: 'fill',
                },
                deleteButtonVM: {
                    type: 'withText',
                    textKey: enMock.submitButtonText,
                    secondary: false,
                    variant: 'fill',
                },
            },
            actionsHeaderKey: enMock.actionsHeader,
            targetAreaSizeHeaderKey: enMock.targetAreaSizeHeader,
            entryPointHeaderKey: enMock.entryPointHeader,
            doseHeaderKey: enMock.doseHeader,
            applicationDateHeaderKey: enMock.applicationDateHeader,
            trichogrammaRequirementHeaderKey:
                enMock.trichogrammaRequirementHeader,
            distanceFromHeadOfficeHeaderKey:
                enMock.distanceFromHeadOfficeHeader,
            totalDistanceFromHeadOfficeHeaderKey:
                enMock.totalDistanceFromHeadOfficeHeader,
            totalTargetAreaSizeHeaderKey: enMock.totalTargetAreaSizeHeader,
            totalTrichogrammaRequirementHeaderKey:
                enMock.totalTrichogrammaRequirementHeader,
            applicationDateValueKey: enMock.applicationDateHeader,
            distanceFromHeadOfficeValueKey: enMock.distanceFromHeadOfficeHeader,
            doseValueKey: enMock.doseValue,
            entryPointValueKey: enMock.entryPointValue,
            targetAreaSizeValueKey: enMock.targetAreaSizeValue,
            trichogrammaRequirementValueKey:
                enMock.trichogrammaRequirementValue,
            commentHeaderKey: enMock.commentHeader,
            missionHeaderKey: enMock.missionHeader,
        },
    },
};
