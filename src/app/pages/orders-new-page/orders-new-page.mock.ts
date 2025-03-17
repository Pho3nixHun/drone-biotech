import { OrdersNewPageVM } from './orders-new-page-vm.model';

export const enMock = {
    frameTitle: 'ftitle',
    submitTitle: 'submit',
    deleteTitle: 'delete',
};

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
                cancelButtonTextKey:
                    'OrdersNewPage.areasDataDialog.cancelButtonText',
                submitButtonTextKey:
                    'OrdersNewPage.areasDataDialog.submitButtonText',
                applicationDateLabelKey:
                    'OrdersNewPage.areasDataDialog.applicationDateLabel',
                dosePerHqLabelKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqLabel',
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
                cancelButtonTextKey:
                    'OrdersNewPage.areasDataDialog.cancelButtonText',
                submitButtonTextKey:
                    'OrdersNewPage.areasDataDialog.submitButtonText',
                applicationDateLabelKey:
                    'OrdersNewPage.areasDataDialog.applicationDateLabel',
                dosePerHqLabelKey:
                    'OrdersNewPage.areasDataDialog.dosePerHqLabel',
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
