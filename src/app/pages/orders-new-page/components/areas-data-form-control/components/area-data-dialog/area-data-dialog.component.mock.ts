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
    areaValue: 'area',
    editButtonText: 'edit',
    coordinatesLabel: 'coordinates',
    commentLabel: 'comment',
    missionNameLabel: 'missionName',
};

export const mockVMWithoutAreaData: AreaDataDialogVM = {
    commentLabelKey: enMock.commentLabel,
    coordinatesLabelKey: enMock.coordinatesLabel,
    missionNameLabelKey: enMock.missionNameLabel,
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: null,
    cancelButtonTextKey: enMock.cancelButtonText,
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonTextKey: enMock.editButtonText,
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonTextKey: enMock.addButtonText,
            deleteButtonTextKey: enMock.deleteButtonText,
        },
        mapPointSelectFormControlVM: {
            addButtonTextKey: enMock.addButtonText,
            deleteButtonTextKey: enMock.deleteButtonText,
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },
    submitButtonTextKey: enMock.submitButtonText,
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};

export const mockVMWithAreaData: AreaDataDialogVM = {
    commentLabelKey: enMock.commentLabel,
    coordinatesLabelKey: enMock.coordinatesLabel,
    missionNameLabelKey: enMock.missionNameLabel,
    applicationDateLabelKey: enMock.applicationDateLabel,
    areaData: {
        comment: enMock.commentLabel,
        missionName: enMock.missionNameLabel,
        applicationDate: new Date(10),
        dosePerHq: 1,
        entryPoint: { lat: 10, lng: 10 },
        id: 'id',
        targetArea: [{ lat: 10, lng: 10 }],
    },
    cancelButtonTextKey: enMock.cancelButtonText,
    dosePerHqLabelKey: enMock.dosePerHqLabel,
    mapFormControlVM: {
        defaultCenter: null,

        mapAreaSelectFormControlVM: {
            areaValueKey: enMock.areaValue,
            editButtonTextKey: enMock.editButtonText,
            coordinatesLabelKey: enMock.coordinatesLabel,
            addButtonTextKey: enMock.addButtonText,
            deleteButtonTextKey: enMock.deleteButtonText,
        },
        mapPointSelectFormControlVM: {
            addButtonTextKey: enMock.addButtonText,
            deleteButtonTextKey: enMock.deleteButtonText,
        },
        mapSearchInputFormControlVM: {
            distanceValueKey: enMock.dosePerHqLabel,
            placeholderKey: enMock.dosePerHqLabel,
        },
    },

    submitButtonTextKey: enMock.submitButtonText,
    targetAreaLabelKey: enMock.targetAreaLabel,
    titleKey: enMock.title,
    type: 'areaDataDialogVM',
    entryPointLabelKey: enMock.entryPointLabel,
};
