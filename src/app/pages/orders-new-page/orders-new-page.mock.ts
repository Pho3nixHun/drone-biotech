import { OrdersNewPageVM } from './orders-new-page-vm.model';

export const ordersNewPageVMDefault: OrdersNewPageVM = {
    frameXVM: {
        titleKey: 'OrdersNewPage.title',
        submitButtonTextKey: 'OrdersNewPage.submitButtonText',
        emailLabelKey: 'OrdersNewPage.emailLabel',
        endCustomerLabelKey: 'OrdersNewPage.endCustomerLabel',
        nameLabelKey: 'OrdersNewPage.nameLabel',
        phoneNumberLabelKey: 'OrdersNewPage.phoneNumberLabel',
        internalOrderNumberLabelKey: 'OrdersNewPage.internalOrderNumberLabel',
        areasDataLabelKey: 'OrdersNewPage.areasDataLabel',

        areasDataFormControlVM: {
            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
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
                mapAreaSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                    deleteButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                },
                mapPointSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                    deleteButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
                },
                areaData: null,
                titleKey: 'OrdersNewPage.areasDataDialog.title.add',
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
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
                mapAreaSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.addButtonText',
                    deleteButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapAreaSelectFormControl.deleteButtonText',
                },
                mapPointSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.addButtonText',
                    deleteButtonTextKey:
                        'OrdersNewPage.areasDataDialog.mapPointSelectFormControl.deleteButtonText',
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
        },
    },
};

export const enMock = {
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
        areasDataLabelKey: enMock.areasDataLabel,

        areasDataFormControlVM: {
            addAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                cancelButtonTextKey: enMock.cancelButtonText,
                submitButtonTextKey: enMock.submitButtonText,
                applicationDateLabelKey: enMock.applicationDateLabel,
                dosePerHqLabelKey: enMock.dosePerHqLabel,
                entryPointLabelKey: enMock.entryPointLabel,
                targetAreaLabelKey: enMock.targetAreaLabel,
                mapAreaSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey: enMock.addButtonText,
                    deleteButtonTextKey: enMock.deleteButtonText,
                },
                mapPointSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey: enMock.addButtonText,
                    deleteButtonTextKey: enMock.deleteButtonText,
                },
                areaData: null,
                titleKey: enMock.title,
            },

            editAreaDataDialogVM: {
                type: 'areaDataDialogVM',
                cancelButtonTextKey: enMock.cancelButtonText,
                submitButtonTextKey: enMock.submitButtonText,
                applicationDateLabelKey: enMock.applicationDateLabel,
                dosePerHqLabelKey: enMock.dosePerHqLabel,
                entryPointLabelKey: enMock.entryPointLabel,
                targetAreaLabelKey: enMock.targetAreaLabel,
                mapAreaSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey: enMock.addButtonText,
                    deleteButtonTextKey: enMock.deleteButtonText,
                },
                mapPointSelectFormControlVM: {
                    defaultCenter: null,
                    addButtonTextKey: enMock.addButtonText,
                    deleteButtonTextKey: enMock.deleteButtonText,
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
        },
    },
};
