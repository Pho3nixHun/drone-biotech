import { AreaDataDialogVM } from './area-data-dialog.model';

export const enMock = {
    applicationDateLabel: 'applicationDate',
    cancelButtonText: 'cancelButton',
    dosePerHqLabel: 'dosePerHq',
    addButtonText: 'addButton',
    deleteButtonText: 'deleteButton',
    submitButtonText: 'submitButton',
    targetAreaLabel: 'targetArea',
    title: 'tit',
    entryPointLabel: 'entryPoint',
};

export const mockVMWithoutAreaData: AreaDataDialogVM = {
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: null,
    cancelButtonTextKey: enMock.cancelButtonText,
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapAreaSelectFormControlVM: {
        addButtonTextKey: enMock.addButtonText,
        defaultCenter: null,
        deleteButtonTextKey: enMock.deleteButtonText,
    },
    mapPointSelectFormControlVM: {
        addButtonTextKey: enMock.addButtonText,
        defaultCenter: null,
        deleteButtonTextKey: enMock.deleteButtonText,
    },
    submitButtonTextKey: enMock.submitButtonText,
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};

export const mockVMWithAreaData: AreaDataDialogVM = {
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: {
        applicationDate: new Date(10),
        dosePerHq: 1,
        entryPoint: { lat: 10, lng: 10 },
        id: 1,
        targetArea: [{ lat: 10, lng: 10 }],
    },
    cancelButtonTextKey: enMock.cancelButtonText,
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapAreaSelectFormControlVM: {
        addButtonTextKey: enMock.addButtonText,
        defaultCenter: null,
        deleteButtonTextKey: enMock.deleteButtonText,
    },
    mapPointSelectFormControlVM: {
        addButtonTextKey: enMock.addButtonText,
        defaultCenter: null,
        deleteButtonTextKey: enMock.deleteButtonText,
    },
    submitButtonTextKey: enMock.submitButtonText,
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};
